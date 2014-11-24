var express = require('express');

// Constants
var DEFAULT_PORT = 80;
var PORT = process.env.VCAP_APP_PORT || process.env.PORT || DEFAULT_PORT;

// App
var app = express();

var n = 0;
app.get('/', function (req, res) {
  n++;
  console.log('Hello world. ' + n);
  res.send('Hello world. ' + n + '\n');
});

app.listen(PORT)
console.log('Running on http://localhost:' + PORT);
