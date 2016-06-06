
const test = require('blue-tape');
const Track = require('./track.model');

function wrapper(description, fn) {
  test(description, t => {
    setup();
    fn(t);
    teardown();
  });
}

function setup() {
  Track.remove({}).exec();
}

function teardown() {
  Track.remove({}).exec();
}

test('Track responds to description property', t => {
  const track = new Track({
    name: 'Tha Thang',
    description: 'Come on, do da dang thang'
  });

  t.plan(1);
  t.ok(track.description === 'Come on, do da dang thang', 'Description should not be empty');
});

test('Track responds to name property', t => {
  const track = new Track({
    name: 'Tha Thang',
    description: 'Come on, do da dang thang'
  });

  t.plan(1);
  t.true(track.name === 'Tha Thang', 'Track name should not be empty');
});

wrapper('create a new track', t => {
  const newTrack = new Track({
    name: 'Erlang',
    description: 'All Things Erlang'
  });

  return newTrack.save().then(track => {
    console.log('Save Successful');
    t.plan(1);
    t.notEqual(track, null);
  });
});
