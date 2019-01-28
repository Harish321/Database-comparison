'user strict';

var mysql = require('mysql');


//local mysql db connection
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'database1'
});

connection.connect(function(err) {
    if (err) throw err;
});
// connection.setDatabse(function(database){
//     this.host = database.host;
//     this.user = database.user;
//     this.password = database.password;
//     this.database = database.database;
// })

module.exports = connection;