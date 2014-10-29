var express = require('express');

var app = express();

app.use('/api', require('./api'));

var port = process.env.PORT || 3141;

app.listen(port, function () {
  console.log('Started server on port ' + port);
});
