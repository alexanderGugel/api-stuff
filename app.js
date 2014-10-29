var express = require('express');

var app = express();


// app.get('/api/twitter/:id', function (req, res) {
//   request('https://api.vineapp.com/timelines/posts/' + req.params.id, function (error, response, body) {
//     res.json(JSON.parse(body));
//   });
// });
//
// app.get('/api/instagram/:id', function (req, res) {
//   // Handle the get for this route
//
// });

app.use('/api', require('./api'));

var port = process.env.PORT || 3141;

app.listen(port, function () {
  console.log('Started server on port ' + port);
});
