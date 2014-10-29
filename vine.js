var express = require('express');
var request = require('request');

var vine = express.Router();

// http://localhost:3141/api/vine/posts/1139356907086516224
vine.get('/posts/:id', function (req, res) {
  request('https://vine.co/api/timelines/posts/' + req.params.id, function (error, response, body) {
    res.cache(JSON.parse(body));
  });
});

// http://localhost:3141/api/vine/users/942331106135519232
vine.get('/users/:id', function (req, res) {
  request('https://vine.co/api/users/profiles/' + req.params.id, function (error, response, body) {
    res.cache(JSON.parse(body));
  });
});

module.exports = exports = vine;
