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
});
