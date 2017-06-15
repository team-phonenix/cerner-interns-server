var mysql = require('mysql');

var connection;

if(!process.env.NODE_ENV) {
  //Development Database
  connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root', //Change this to your actual password
    password : '', //No password needed
    database : 'intern_app'
  });
} else {
  //Production Database
  connection = mysql.createConnection({
    host     : 'cernerinterns.cjvoigt.com',
    user     : 'cerner_interns',
    password : 'cernerInterns123',
    database : 'cerner_interns'
  });
}

module.exports = connection;
