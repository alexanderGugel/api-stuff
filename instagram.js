var express = require('express');
var request = require('request');

var instagram = express.Router();

var CLIENT_ID = process.env.INSTAGRAM_CLIENT_ID;

if (!CLIENT_ID) {
  throw new Error('Missing INSTAGRAM_CLIENT_ID env var');
}

instagram.get('/media/:id', function (req, res) {
  request('https://api.instagram.com/v1/media/' + req.params.id + '?client_id=' + CLIENT_ID, function (error, response, body) {
    res.cache(JSON.parse(body));
  });
});

instagram.get('/users/:id', function (req, res) {
  request('https://api.instagram.com/v1/users/' + req.params.id + '?client_id=' + CLIENT_ID, function (error, response, body) {
    res.cache(JSON.parse(body));
  });
});

module.exports = exports = instagram;
