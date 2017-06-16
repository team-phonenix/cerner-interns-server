var dbConnection = require("../database");
var createHandler = require("./createHandler");

var answer = {
  getForQuestionID: function(questionID, callback) {
    dbConnection.query({
      sql: 'SELECT * FROM `answer` WHERE questionID = ?',
      timeout: 40000,
      values: [questionID]
    }, createHandler(callback));
  }
}

module.exports = answer;
