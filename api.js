var express = require('express');
var redis = require('./redis');

var api = express.Router();

var expire = process.env.CACHE_EXPIRE || 3600;

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
    redis.expire(req.url, expire);
  };
  next()
});

api.all('*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

api.use(require('./vine'));
api.use(require('./twitter'));
api.use(require('./instagram'));

module.exports = exports = api;
