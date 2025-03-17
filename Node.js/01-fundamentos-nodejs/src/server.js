import http from 'node:http';

const server = http.createServer((req, res) => {
  return res.end('EU VOU VENCER!');
});

server.listen(3333);