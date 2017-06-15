var request = require('supertest');

describe('question tests', function () {
  var server;

  beforeEach(function () {
    delete require.cache[require.resolve('../app')];
    server = require('../app');
  });

  afterEach(function (done) {
    server.close(done);
  });

  it('responds to /event', function testSlash(done) {
    request(server)
      .get('/event')
      .expect(200, done);
  });

  //TODO: fix these tests
  it('gets event 1 by id', function testEventbyID(done) {
    request(server)
      .get('/event/1')
      .expect(200, done);
  });

  it('gets status 500 with id -1', function testEventByBadID(done) {
    request(server)
      .get('/event/-1')
      .expect();
  })
});
