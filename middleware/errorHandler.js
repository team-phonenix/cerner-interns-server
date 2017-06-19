module.exports = function(err, req, res, next) {
  if (res.headersSent) {
    next(err);
  }

  console.error(err);
  res.status(500);
  res.send(JSON.stringify({error: err}));
}
