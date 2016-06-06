const agent = require('supertest-koa-agent');
const app = require('../../server');
const test = require('tape');

test('Get All Tracks Successfully', t => {
  agent(app)
    .get('/tracks')
    .expect('Content-Type', /json/)
    .expect(200)
    .end((err, res) => {
      t.plan(2);
      t.ok(err === null, 'Error should not be thrown');
      t.notEqual(res, null, 'Response should not be null');
    });
});
