module.exports = function requestLogger(req, res, next) {
  var date = new Date();
  var log = "[" + date.toISOString() + "] - " + req.method + " " + req.path;
  console.log(log);
  next();
}
