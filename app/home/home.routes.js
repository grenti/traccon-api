
const Router = require('koa-router');
const homeRoutes = new Router();
const Controller = require('./home.controller');

homeRoutes
  .get('/', Controller.get);

module.exports = homeRoutes;
