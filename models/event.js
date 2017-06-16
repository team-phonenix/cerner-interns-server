var dbConnection = require("../database");
var createHandler = require("./createHandler");

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
