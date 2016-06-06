
const Router = require('koa-router');
const sessionRoute = new Router({
  prefix: '/sessions'
});
const Controller = require('./session.controller');

sessionRoute
  .get('/', Controller.getSessions)
  .get('/:id', Controller.getSession)
  .post('/', Controller.create)
  .put('/:id', Controller.update)
  .delete('/:id', Controller.remove);

module.exports = sessionRoute;
