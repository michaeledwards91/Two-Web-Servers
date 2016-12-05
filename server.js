var http = require("http");

var goodPORT = 7000;
var badPORT = 7500;

function handleRequest(request, response) {
	response.end("Path Hit: " + request.url);
}

var server = http.createServer(handleRequest);

server.listen(goodPORT, function() {
	console.log("u cool. PORT:" + goodPORT);
});

var server2 = http.createServer(handleRequest);

server2.listen(badPORT, function() {
	console.log("u ugly. PORT: " + badPORT);
});