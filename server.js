const koa = require('koa');
const body = require('koa-body');
const app = koa();
const cors = require('koa-cors');
const path = require('path');
const config = require('./config');
const mongoose = require('mongoose');

app.context.db = mongoose;
require('./config/mongoose');

app.on('error', (err, context) => {
  console.info(`Server error: ${err}\nContext: ${context}`);
});

app.use(body({ formidable: { uploadDir: path.resolve(__dirname, '/uploads') } }));
app.use(cors({ origin: true, methods: ['GET', 'POST', 'PUT', 'DELETE'] }));

app.use(function* (next) {
  const start = new Date();
  yield next;
  const ms = new Date() - start;
  this.set('X-Response-Time', `${ms} ms`);
  this.set('Server-Type', 'Not MS!');
});

app.use(function* (next) {
  const start = new Date();
  yield next;
  const ms = new Date() - start;
  console.log('%s %s - %s', this.method, this.url, ms);
});

require('./app/routesRegistry')(app);

const { server } = config;
app.listen(server.port, () => {
  console.log(`Server running on port ${server.port}`);
});

module.exports = app;
