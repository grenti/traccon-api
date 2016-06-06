
const Router = require('koa-router');
const presenterRouter = new Router({
  prefix: '/presenters'
});
const Controller = require('./presenter.controller');

presenterRouter
  .get('/', Controller.getAll)
  .get('/:id', Controller.get)
  .post('/', Controller.create)
  .put('/:id', Controller.update)
  .delete('/:id', Controller.delete);

module.exports = presenterRouter;
