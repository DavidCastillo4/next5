import { createServer } from 'http';
import { parse } from 'url';
import next from 'next';

const port = 3117; 
//const dev = false;
//console.log(dev)
//const app = next({ dev });
const app = next({
 dev: false,
 conf: {
   basePath: '/next5',
   assetPrefix: '/next5',
 },
});

const handle = app.getRequestHandler();

app.prepare().then(() => {
  createServer((req, res) => {
    const parsedUrl = parse(req.url, true);
    handle(req, res, parsedUrl);
  }).listen(port, () => {
    console.log(`> Ready on http://localhost:${port}`);
  });
});
