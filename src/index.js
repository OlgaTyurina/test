import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.get('/', (req, res) => {
  res.json({
    hello: 'Jscript World',
  });
});

app.get('/task2A', (req, res) => {
  const sum = (+req.query.a || 0) + (+req.query.b || 0);
  res.send(sum.toString());
});

app.get('/name', (req, res) => {
  var query,  fullname, namelength, i;
  query = decodeURI(location.search.substr(1)); // Обрезаем знак вопроса и берем декодированную строку поиска
  if(query.length){
  	query = '{"' + query.replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g,'":"') + '"}'; // Преобразуем в правильный JSON
  	query = JSON.parse(query); // Прелбразуем в объект
  	if(query.hasOwnProperty('fullname') && query.fullname.length){ // Если в объекте есть наш ключ и он непустой
  		// Кромсаем имя через пробел
  		fullname = query.fullname.split(' ');
  		// Берем только первые 3 элемента;
  		fullname = fullname.slice(0,3);
  		// Элементов может быть 2 или 3, меньше - не катит
  		if (fullname.length >= 2) {
  			namelength = fullname.length - 1;
  			for(i=0; i <= namelength; i++){
  				if(i < namelength && fullname[i]){
  					fullname[i] = fullname[i].substr(0,1).toUpperCase() + '.';
  				}
  			}
  			fullname = fullname.join(' ', fullname.unshift(fullname.pop()));
  		}else{
  			fullname = false;
  		}
  	}
  }
  // Если есть значение - оставляем, иначе - абшибачка
  fullname = fullname? fullname : 'invalid fullname';

  // Выводим
  console.log(fullname);

  //Кричим
  alert(fullname);
});



app.listen(3000, () => {
  console.log('Your app listening on port 3000!');
});
