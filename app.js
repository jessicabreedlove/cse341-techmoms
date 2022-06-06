const http = require('http');

const express = require('express');
const app = express();

app.use('/add-product', (req, res, next) => {
  console.log('In a different page');
  res.send('<h1>Hello from other page - Express</h1>'); //send response
});

app.use('/', (req, res, next) => {
  console.log('Jess HI');
  res.send('<h1>Hello from Jess - Express</h1>'); //send response
});

app.listen(3000);
