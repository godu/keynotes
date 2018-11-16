const http = require('http');
const url = require('url');

http.createServer(onRequest).listen(3000);
const {
    hostname,
    port
} = url.parse(process.env.PROXY_URL || 'http://localhost:3000');

function onRequest(client_req, client_res) {
  console.log('serve: ' + client_req.url);

  var options = {
    hostname,
    port,
    path: client_req.url,
    method: client_req.method
  };

  var proxy = http.request(options, function (res) {
    res.pipe(client_res, {
      end: true
    });
  });

  client_req.pipe(proxy, {
    end: true
  });
}