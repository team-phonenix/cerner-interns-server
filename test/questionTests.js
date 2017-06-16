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

  it('responds to /question', function testSlash(done) {
    request(server)
      .get('/question')
      .expect(validQuestions)
      .expect(200, done);
  });

  it('gets question by id', function testQuestionByID(done) {
    request(server)
      .get('/question/1')
      .expect(validQuestions)
      .expect(200, done);
  });
});

function validQuestions(res) {
  var questions = res.body;
  for(var i = 0; i < questions.length; i++) {
    var question = questions[i];
    if (!('questionID' in question)) throw new Error("missing questionID");
    if (!('title' in question)) throw new Error("missing title");
    if (!('description' in question)) throw new Error("missing description");
    if (!('date' in question)) throw new Error("missing date");
    if (!('email' in question)) throw new Error("missing email");
  }
}
