var express = require('express');
var redis = require('./redis');

var api = express.Router();

api.all('*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

api.use('/vine', require('./vine'));
api.use('/twitter', require('./twitter'));
api.use('/instagram', require('./instagram'));

module.exports = exports = api;
