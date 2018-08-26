// Set up MySQL connection.
require("dotenv").config();
var mysql = require("mysql");

/**
 * local connection settings
 */
// var connection = mysql.createConnection({
//     host: "localhost",
//     port: 3306,
//     user: "root",
//     password: process.env.PSWD,
//     database: "burgers_db"
// });
// Make connection.
// connection.connect(function (err) {
//     if (err) {
//         console.error("error connecting: " + err.stack);
//         return;
//     }
//     console.log("connected as id " + connection.threadId);
// });

/**
 * jawsDB connection settings
 */
var connection = mysql.createConnection(process.env.JAWSDB_URL);
connection.connect();

console.log(process.env.JAWSDB_URL);
connection.query('SELECT 1 + 1 AS solution', function (err, rows, fields) {
    
    console.log(fields);
    console.log(rows);
    if (err) throw err;
    console.log('The solution is: ', rows[0].solution);
    // connection.end();
});


// Export connection for our ORM to use.
module.exports = connection;
