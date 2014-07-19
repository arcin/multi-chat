var http = require('http'),
    fs = require('fs'),
    path = require('path'),
    mime = require('mime'),
    cache = {};

function send404(response) {
  response.writeHead(404, {'Content-Type' : 'text/plain'});
  response.write('Error 404: Could not find what you were looking for.');
  response.end();
}