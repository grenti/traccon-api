
const path = '/tracks';
const Router = require('koa-router');
const trackRouter = new Router({
  prefix: path
});
const Controller = require('./track.controller');

trackRouter
  .get('/', Controller.getTracks)
  .get('/:id', Controller.getTrack)
  .post('/', Controller.create)
  .put('/:id', Controller.update)
  .delete('/:id', Controller.remove);

module.exports = trackRouter;
