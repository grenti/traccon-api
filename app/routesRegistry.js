
const home = require('./home/home.routes');
const track = require('./tracks/track.routes');
const session = require('./sessions/session.routes');
const presenter = require('./presenters/presenter.routes');

const register = app => {
  app
    .use(home.routes())
    .use(home.allowedMethods())
    .use(track.routes())
    .use(track.allowedMethods())
    .use(session.routes())
    .use(session.allowedMethods())
    .use(presenter.routes())
    .use(presenter.allowedMethods());
};

module.exports = register;
