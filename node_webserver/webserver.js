var http = require('http');
var fs = require('fs');

fs.readFile('index.html', function (err, data) {
    if (err) {
        throw err;
        console.log(data);
    }
    http.createServer(function (request, response){
        console.log('handling request');
        response.writeHeader(200,{"content-type" : "text/html"});
        response.write(data);
        response.end('It Works!! Path Hit: ' + request.url);
    }).listen(8888, function() {
        console.log('Server Listening on: http://localhost:8888');
    });
});