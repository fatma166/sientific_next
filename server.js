const http = require('http');
const { parse } = require('url');
const next = require('next');

const port = parseInt(process.env.PORT || '3000', 10);
const dev = process.env.NODE_ENV !== 'production';
const hostname = process.env.HOST || 'localhost';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  http.createServer((req, res) => {
    const parsedUrl = parse(req.url, true);
    handle(req, res, parsedUrl);
  }).listen(port);

  console.log(
    `> Server listening at http://${hostname}:${port} as ${dev ? 'development' : process.env.NODE_ENV
    }`
  );
});