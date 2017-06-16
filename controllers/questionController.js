var express = require('express')
var questionModel = require('../models/question');
var answerModel = require('../models/answer');
var router = express.Router();

router.get('/', function(req, res) {
  questionModel.getAll(req.query.page, function(error, results) {
    if (error) {
      return console.error(error);
    }

    res.status(200).send(JSON.stringify(results));
  });
});

router.get('/search', function(req, res) {
  questionModel.search(req.query.search, function(error, results) {
    if (error) {
      return console.error(error);
    }

    res.status(200).send(JSON.stringify(results));
  });
});

router.get('/:id', function(req, res) {
  questionModel.getByID(req.params.id, function(error, questionResults) {
    if (error) {
      return console.error(error);
    }

    answerModel.getForQuestionID(req.params.id, function(error, answerResults) {
      if (error) {
        return console.error(error);
      }

      console.log(answerResults);
      questionResults[0].answers = answerResults;
      console.log(questionResults);
      res.status(200).send(JSON.stringify(questionResults));
    });
  });
});

module.exports = router;
