var express = require('express');
var Twit = require('twit');

var twitter = express.Router();

var twitOptions = {
  'consumer_key': null,
  'consumer_secret': null,
  'access_token': null,
  'access_token_secret': null
};

for (var twitOptionKey in twitOptions) {
  var envVarKey = 'TWITTER_' + twitOptionKey.toUpperCase();
  if (!process.env[envVarKey]) {
    throw new Error('Missing ' + envVarKey + ' env var');
  }
  twitOptions[twitOptionKey] = process.env[envVarKey];
}

var twit = new Twit(twitOptions);

twitter.get('/statuses/:id', function (req, res) {
  twit.get('statuses/show/' + req.params.id, function (error, data, response) {
    if (error) {
      res.status(error.statusCode).cache(error);
    } else {
      res.cache(data);
    }
  });
});

twitter.get('/users/:id', function (req, res) {
  twit.get('users/show/' + req.params.id, function (error, data, response) {
    if (error) {
      res.status(error.statusCode).cache(error);
    } else {
      res.cache(data);
    }
  });
});

module.exports = exports = twitter;
