var express = require('express');
var app = express();
var eventsController = require('./controllers/eventsController');
var questionController = require('./controllers/questionController');

if(!process.env.NODE_ENV) {
  function requestLogger(req, res, next) {
    var date = new Date();
    var log = "[" + date.toISOString() + "] - " + req.method + " " + req.path;
    console.log(log);
    next();
  }

  app.use(requestLogger);
}

app.get('/', function (req, res) {
  res.status(200).send('ok');
});

app.use('/event', eventsController);
app.use('/question', questionController);

var server = app.listen(3000, function () {
  var port = server.address().port;
  console.log('Example app listening at port %s', port);
});

module.exports = server;
