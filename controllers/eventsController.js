var express = require('express')
var eventModel = require('../models/event');

var router = express.Router()

router.get('/', function(req, res) {
  res.status(200).send('This is an event');
});

router.get('/:id', function(req, res) {
  eventModel.getById(req.params.id, function(error, results) {
    if (error) {
      console.error(error);
      res.status(500);
    }

    res.status(200).send(results);
  });
})

module.exports = router;
