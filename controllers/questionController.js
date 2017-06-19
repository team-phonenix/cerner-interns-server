var express = require('express')
var questionModel = require('../models/question');
var answerModel = require('../models/answer');
var router = express.Router();

router.get('/', function(req, res, next) {
  questionModel.getAll(req.query.page, function(error, results) {
    if (error) {
      return next(error);
    }

    res.status(200).send(JSON.stringify(results));
  });
});

router.get('/search', function(req, res, next) {
  questionModel.search(req.query.search, function(error, results) {
    if (error) {
      return next(error);
    }

    res.status(200).send(JSON.stringify(results));
  });
});

router.get('/:id', function(req, res, next) {
  questionModel.getByID(req.params.id, function(error, questionResults) {
    if (error) {
      return next(error);
    }

    answerModel.getForQuestionID(req.params.id, function(error, answerResults) {
      if (error) {
        return next(error);
      }

      questionResults[0].answers = answerResults;
      res.status(200).send(JSON.stringify(questionResults));
    });
  });
});

router.post('/', function(req, res, next) {
  questionModel.add(req.body, function(error, results) {
    if (error) {
      return next(error);
    }

    res.status(200).send(JSON.stringify(results));
  });
});

router.post('/answer', function(req, res, next) {
  answerModel.add(req.body, function(error, results) {
    if (error) {
      return next(error);
    }

    res.status(200).send(JSON.stringify(results));
  });
});

module.exports = router;
