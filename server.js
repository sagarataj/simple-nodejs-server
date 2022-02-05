var http = require('http');
var PORT = process.env.PORT || 1337;
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\n');
}).listen(PORT);
console.log(`Server running on port ${PORT}`);
