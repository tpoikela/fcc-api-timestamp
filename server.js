
var express = require("express");
var app = express();

var url = require('url');

var TimeConverter = require("./timeconverter");

var conv = new TimeConverter();

var port =  8080;
var DEBUG = process.argv[3] || 0;

var reqServed = 0;

// Respond to / request with index.html
app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
});

// Respond to requests like /Dec or /XXX
app.get('/*', function (req, res) {
    serveTimeRequest(req, res);
});


app.listen(port, function () {
    console.log('Timestamp microservice listening on port ' + port)
});

function serveTimeRequest(req, res) {
    var url_parts = url.parse(req.url, true);
    var bodyJSON = JSON.stringify(url_parts);
    if (DEBUG) console.log("Got req with body:  " + bodyJSON);
    
    var path = url_parts.path;
    path = path.substring(1);
    var json = conv.convert(path);
    if (DEBUG) console.log("Req starting with char. Path: " + path);
    res.send(json);
    res.end();
    
}

module.exports = app;