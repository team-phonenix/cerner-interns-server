module.exports = function createHandler(callback) {
  return function handler(error, results, fields) {
    if (error) {
      callback(error);
      return;
    }

    callback(null, results);
  };
};
