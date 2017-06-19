var express = require('express')
var eventModel = require('../models/event');

var router = express.Router()

router.get('/', function(req, res, next) {
  eventModel.getAllEvents(req.query.page, function(error ,results) {
    if(error) {
      return next(error);
    }

    res.status(200).send(JSON.stringify(results));
  });
});

router.get('/search', function(req, res, next) {
  eventModel.searchEvents(req.query.query, function(error, results) {
    if (error) {
      return next(error);
    }

    res.status(200).send(JSON.stringify(results));
  });
});

router.get('/:id', function(req, res, next) {
  eventModel.getById(req.params.id, function(error, results) {
    if (error) {
      return next(error);
    }

    res.status(200).send(results);
  });
});

router.post('/', function(req, res, next) {
  eventModel.add(req.body, function(error, results) {
    if (error) {
      return next(error);
    }

    res.status(200).send(JSON.stringify(results));
  });
});

module.exports = router;
