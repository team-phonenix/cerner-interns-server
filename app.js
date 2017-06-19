var express = require('express');
var bodyParser = require('body-parser');

var logger = require('./middleware/logger');
var errorHandler = require('./middleware/errorHandler');
var eventsController = require('./controllers/eventsController');
var questionController = require('./controllers/questionController');

//Create application
var app = express();

//Production Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(errorHandler);

//Dev Middleware
if(!process.env.NODE_ENV) {
  app.use(logger);
}

// Route Controllers
app.use('/event', eventsController);
app.use('/question', questionController);

//Start Server
var server = app.listen(3000, function () {
  var port = server.address().port;
  console.log('Example app listening at port %s', port);
});

module.exports = server;
