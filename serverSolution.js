const http = require('http');

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/plain');
  res.writeHead(200);
  res.end('Hello World!');
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});