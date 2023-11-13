const http = require("http"); // import http module

http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World')
}).listen(8080);


console.log("server running on port 8080")

const moment = require('moment'); // require
moment().format(); 