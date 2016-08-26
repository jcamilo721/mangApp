var http = require('http'),
    fs = require('fs');


fs.readFile('./src/index.html', function (err, html) {
    if (err) {
        throw err; 
    }       
    http.createServer(function(request, response) {  
        response.writeHeader(200, {"Content-Type": "text/html"});  
        response.write(html);  
        response.end();  
    }).listen(8000);
});

/*
var http = require('http');

var server = http.createServer(function(req, res){
	res.writeHead(200, {'Content-Type': 'text/html'});
	res.end('<h1>Hello world :D ! <h1>')
});

var port = Number(process.env.PORT || 3000)

server.listen(port);

--------------------

"use strict";
const  fs    = require('fs'),
        http = require("http");

http.createServer(function (request, response) {
  fs.createReadStream(`${__dirname}/index.html`}.pipe(response);
}).listen(8000);

console.log('Listening on port 8000.');

--------------funciona abre el index.html-------------
var http = require('http'),
    fs = require('fs');


fs.readFile('./src/index.html', function (err, html) {
    if (err) {
        throw err; 
    }       
    http.createServer(function(request, response) {  
        response.writeHeader(200, {"Content-Type": "text/html"});  
        response.write(html);  
        response.end();  
    }).listen(8000);
});
---------------------------------------------------------
*/