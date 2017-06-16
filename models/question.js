var dbConnection = require("../database");
var createHandler = require("./createHandler");

var question = {
  getByID: function(id, callback) {
    dbConnection.query({
      sql: 'SELECT * FROM `question` WHERE `questionID` = ?',
      timeout: 40000,
      values:[id]
    }, createHandler(callback));
  },

  getAll: function(page, callback) {
    var pageSize = 5
    if (!page || page < 1) {
      page = 0;
    } else {
      page = (page - 1) * 5;
    }

    dbConnection.query({
      sql: 'SELECT * FROM `question` LIMIT ?, ?',
      timeout: 40000,
      values: [page, pageSize]
    }, createHandler(callback));
  },

  search: function(searchText, callback) {
    searchText = "%" + searchText + "%";
    dbConnection.query({
      sql: "SELECT * FROM `question` WHERE title LIKE ? OR description LIKE ?",
      timeout: 40000,
      values: [searchText, searchText]
    }, createHandler(callback));
  }
}

module.exports = question;
