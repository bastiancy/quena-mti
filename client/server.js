var express = require('express')
var app = express()

// other route
app.get('/schemas', function (req, res) {
  res.send('Todo: serve xsd schemas');
});

// serve angular2 app (AOT)
app.use(express.static(path.join(__dirname, 'apt')));

app.listen(5000, function () {
  console.log('Example app listening on port 5000!');
});

