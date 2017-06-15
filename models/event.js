var dbConnection = require("../database");

function createHandler(callback) {
  return function handler(error, results, fields) {
    if (error) {
      callback(error);
      return;
    }

    callback(null, results);
  };
}

var event = {
  getById: function(id, callback) {
    dbConnection.query({
      sql: 'SELECT * FROM `event` WHERE `eventID` = ?',
      timeout: 4000,
      values: [id]
    }, createHandler(callback));
  },
}

module.exports = event;
