import http from 'node:http';

const users = []

const server = http.createServer((req, res) => {
  const { method, url } = req;

  if (method === 'GET' && url === '/users') {
    return res
    .setHeader('Content-Type', 'application/json')
    .end(JSON.stringify(users));
  }

  if (method === 'POST' && url === '/users') {
    users.push({
      id: 1,
      name: 'Laércio Fernandes',
      email: 'laerciofernandesmelonetoo@gmail.com'
    });

    return res.end('Usuário criado comsucesso!');
  }

  return res.end('EU VOU VENCER!');
});

server.listen(3333);