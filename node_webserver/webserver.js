var http = require('http');
var fs = require(fs);
var server = http.createServer(function handleRequest(request, response){
    console.log('handling request');
    response.write('initializing request response\n');
    response.end('It Works!! Path Hit: ' + request.url);
});
server.listen(8888, function(){
    console.log('Server Listening on: http://localhost:8888');
});
fs.readFile('index.html', function (err, data) {
    if (err) throw err;
    console.log(data);
});