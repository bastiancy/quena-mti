var express = require('express');
var app = express();
var path = require('path');

app.use(express.static(__dirname + '/aot'));

// error handler
app.use(function onerror(err, req, res, next) {
    console.error(err);
    res.code(500);
    res.end('error', { error: 'internal server error' });
});

// other route
app.get('/schemas', function (req, res) {
  res.send('Todo: serve xsd schemas');
});

// serve angular2 app (AOT)
app.get('/*',  function(req, res, next) {
  res.sendFile('index.html', { root: __dirname + '/aot' });
});

app.listen(5000, function () {
  console.log('Example app listening on port 5000!');
});

