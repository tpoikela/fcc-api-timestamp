
var express = require("express");
var url = require('url');

var timeConverter = require("./timeconverter");

var port = process.argv[2] || 8080;

var app = express();

var reqServed = 0;

app.get(/^\/\d+/, function (req, res) {
    var url_parts = url.parse(req.url, true);
    var bodyJSON = JSON.stringify(url_parts);
    console.log("Got req with body:  " + bodyJSON);
    res.send("Req starting with digit");
    res.end();
});

// Respond to requests like /Dec or /XXX
app.get(/^\/[a-zA-Z]+/, function (req, res) {
    var url_parts = url.parse(req.url, true);
    var bodyJSON = JSON.stringify(url_parts);
    console.log("Got req with body:  " + bodyJSON);
    res.send("Req starting with char");
    res.end();
});

app.listen(port, function () {
    console.log('Timestamp microservice listening on port ' + port)
});