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

  getAllEvents: function(pageNum, callback) {
    pageSize = 5;
    if(!pageNum || pageNum <= 0) {
      pageNum = 0;
    } else {
      pageNum = (pageNum - 1) * pageSize; 
    }
    dbConnection.query({
      sql: 'SELECT * FROM `Event` LIMIT ?, ?',
      timeout: 4000,
      values: [pageNum, pageSize]
    }, createHandler(callback));
  },

  searchEvents: function(searchText, callback) {
    searchText = "%" + searchText + "%";
    dbConnection.query({
      sql: 'SELECT * FROM `Event` WHERE title LIKE ? OR description LIKE ?',
      timeout: 4000,
      values: [searchText, searchText]
    }, createHandler(callback));
  }
}

module.exports = event;
