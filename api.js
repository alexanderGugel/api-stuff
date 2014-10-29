var express = require('express');
var redis = require('./redis');

var api = express.Router();

api.get('*', function (req, res, next) {
  redis.get(req.url, function (error, cached) {
    if (cached) {
      res.json(JSON.parse(cached));
    } else {
      next();
    }
  })
});

api.use(function (req, res, next) {
  res.cache = function (json) {
    res.json(json);
    redis.set(req.url, JSON.stringify(json));
    redis.expire(req.url, 3600);
  };
  next()
});

api.all('*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

api.use('/vine', require('./vine'));
api.use('/twitter', require('./twitter'));
api.use('/instagram', require('./instagram'));

module.exports = exports = api;
