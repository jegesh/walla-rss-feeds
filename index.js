var express = require('express');

// Constants
var PORT = 8080;

// App
var app = express();
app.use(express.static(__dirname + '/dist'));

app.get('/', function (req, res) {
  res.sendFile( __dirname + "/dist/" + "index.html" );
});

app.listen(PORT);
console.log('Running on http://localhost:' + PORT);