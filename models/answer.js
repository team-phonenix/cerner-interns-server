var dbConnection = require("../database");
var createHandler = require("./createHandler");

var answer = {
  getForQuestionID: function(questionID, callback) {
    dbConnection.query({
      sql: 'SELECT * FROM `answer` WHERE questionID = ?',
      timeout: 40000,
      values: [questionID]
    }, createHandler(callback));
  },

  add: function(info, callback) {
    dbConnection.query({
      sql: 'INSERT INTO `answer` (answer, questionID, email, isVerified, date) VALUES (?, ?, ?, ?, ?)',
      timeout: 40000,
      values:[info.answer, info.questionID, info.email, info.isVerified, info.date]
    }, createHandler(callback));
  }
}

module.exports = answer;
