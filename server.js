
var express = require("express");

var port = 8080;

var app = express()

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.listen(port, function () {
  console.log('Example app listening on port ' + port)
})