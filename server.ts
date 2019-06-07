import express from 'express';
import next from 'next';
import middleware from 'i18next-express-middleware';
import i18next from 'i18next';

const port = process.env.PORT || 3000;
const app = next({ dev: process.env.NODE_ENV !== 'production' });
const handle = app.getRequestHandler();

i18next.use(middleware.LanguageDetector).init({
  preload: ['en'],
});

(async () => {
  await app.prepare();
  const server = express();

  server.use(middleware.handle(i18next));

  server.get('*', (req, res) => handle(req, res));

  await server.listen(port);
  console.log(`> Ready on http://localhost:${port}`);
})();
