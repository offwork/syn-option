'use strict';

// Load config
require('dotenv').config();

var cors = require('cors');
var parse = require('csv-parse/lib/sync');
var fs = require('fs');
var express = require('express');
var path = require('path');
var yahooFinance = require('yahoo-finance');

var app = express();
var stocks = [];

// Enable CORS
app.use(cors());
app.set('port', (process.env.PORT || 5000));


function getRandomInt(min, max) {
  return (Math.floor(Math.random() * (max - min + 1)) + min);
}

function loadSymbols() {
  let csv = fs.readFileSync(__dirname+'/companies.csv', { encoding: 'utf8' });

  stocks = parse(csv, {columns: true}).map(stock => {
    let current = getRandomInt(5100, 80000) / 100;
    let change = getRandomInt(-1000, 1000) / 100;
    return {
      symbol: stock.Symbol,
      name: stock.Name,
      price: current,
      change: change
    };
  });

  setTimeout(loadSymbols, 1000 * 60 * 60 * 24); // Reload once a day
}

// Endpoint to load snapshot data from yahoo finance
app.get('/stocks/quote', function(req, res) {
  if (req.query.symbols) {
    var symbols = req.query.symbols.split(',');
    symbols.map(function(symbol) {
      return symbol.toUpperCase();
    });

    yahooFinance.quote({
      symbols: symbols,
      modules: ['price', 'summaryDetail'] 
    }, function(err, snapshot) {
      if (err) {
        res.status(401).send(err);
      }

      res.status(200).send(snapshot);
    });
  } else {
    res.status(400).send({message: `The request requires at least one symbol. Try adding '?symbols=appl' to the request.`});
  }
});


// Endpoint to load historical data from yahoo finance.
app.get('/stocks/historical/:symbol', function(req, res) {
  var today = new Date();
  var yearAgo = new Date(today.getTime() - 1000 * 60 * 60 * 24 * 365);
  yahooFinance.historical({
    symbol: req.params.symbol,
    from: yearAgo.toString(),
    to: today.toString()
  }, function(err, quotes) {
    if (err) {
      res.status(500).send(err);
    }

    res.status(200).send(quotes);
  });
});

app.get('/', function(req, res) {
  res.status(200).contentType('text/html').send(`Welcome to the Angular in Action API.`);
});

app.listen(app.get('port'), function() {
  console.log('App is running on port ', app.get('port'));
});

// Load the initial data
loadSymbols();

// Every 10 seconds, change data values
setInterval(() => {
  let start = Date.now();
  let changes = [0, 0, 0, 1, 1, 1, 1, 1, -1 -1 -1 -1 -1, 2, 2, 2, -2, -2, -2, 3, -3, 4, -4];
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
}, 10000);