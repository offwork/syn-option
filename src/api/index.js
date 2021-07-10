'use strict';

// Load config
require('dotenv').config();
const fs = require('fs');
const parse = require('csv-parse/lib/sync');
const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http, {
  cors: {
    origin: '*',
    methods: ["GET", "POST"],
    credentials: false
  } 
});

let stocks = [];

app.get('/', function(req, res) {
  res.status(200).contentType('text/html').send(`Welcome to the Angular in Action API.`);
});


http.listen(5000, function() {
  console.log('App is running on port 5000');
});

io.on('connection', function(socket) {
  console.log('Client connected');
  updateData(socket);
});

function updateData(socket) {
  socket.emit('dataupdate', stocks);

  setTimeout(() =>{
    updateData(socket);
  }, 1000)
}


function getRandomInt(min, max) {
  return (Math.floor(Math.random() * (max - min + 1)) + min);
}

function loadSymbols() {
  const csv = fs.readFileSync(__dirname+'/companies.csv', { encoding: 'utf8' });

  stocks = parse(csv, {columns: true}).map((stock, index) => {
    let current = getRandomInt(5100, 80000) / 100;
    let change = getRandomInt(-1000, 1000) / 100;
    return {
      id: index,
      symbol: stock.Symbol,
      name: stock.Name,
      price: current,
      change: change
    };
  });

  setTimeout(loadSymbols, 1000);
}

// Load the initial data
loadSymbols();

// Every 10 seconds, change data values
setInterval(() => {
  const changes = [0, 0, 0, 1, 1, 1, 1, 1, -1 -1 -1 -1 -1, 2, 2, 2, -2, -2, -2, 3, -3, 4, -4];
  stocks = stocks
    .map(stock => {
      let index = getRandomInt(0, changes.length - 1);
      let change = changes[index];
      if (stock.price > 1000) {
        change = -1;
      }
      if (stock.price <= 1) {
        change = 1;
      }
      // Force it to be 2 decimals, cuz in JS floating point math can be lolz
      stock.change = parseInt((stock.change * 100) + change) / 100;
      stock.price = parseInt((stock.price * 100) + change) / 100; 
      return stock;
    });
}, 500);