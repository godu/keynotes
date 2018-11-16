const http = require('http');

const hostname = '0.0.0.0';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  console.log(req.url);
  res.end(`Hello World\n> ${process.env.HOSTNAME}`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});


process.once('SIGINT', () => {
  server.close();
});

process.once('SIGTERM', () => {
  server.close();
});