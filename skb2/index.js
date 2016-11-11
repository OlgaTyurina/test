var Skb = require('skb');
var token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ODE4ZDJjMDJmYjc0ZDAwMTFiZTdjY2IiLCJ1c2VybmFtZSI6ImJya3RlQGJrLnJ1Iiwicm9sZSI6InVzZXIiLCJpYXQiOjE0NzgwMjE4MjZ9.CGXq3ow-rWdTDrHHm6-afrNT-6OxBNjEc_ydMKZrPqQ';
var skb = new Skb(token);
skb.taskHelloWorld('Hello World!');