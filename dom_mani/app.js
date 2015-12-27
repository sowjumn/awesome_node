var http = require('http');
var fs = require('fs');

var server = http.createServer();
var resp = fs.createReadStream('index.html');
server.on('request', function(request, response) {
  resp.pipe(response);
});

server.listen('8080');