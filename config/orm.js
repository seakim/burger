


// * `selectAll()`
// * `insertOne()`
// * `updateOne()`



// Import MySQL connection.
var connection = require("../config/connection.js");

/**
 * Helper function for SQL syntax. 
 * printQuestionMarks(3) => "?,?,?"
 */
function printQuestionMarks(num) {
	var arr = [];
	for (var i = 0; i < num; i++) {
		arr.push("?");
	}
	return arr.toString();
}

/**
 * Helper function to convert object key/value pairs to SQL syntax
 * e.g> {name: 'Lana Del Grey'} => ["name='Lana Del Grey'"]
 */
function objToSql(ob) {
	var arr = [];
	for (var key in ob) {
		var value = ob[key];
		// check to skip hidden properties
		if (Object.hasOwnProperty.call(ob, key)) {
			// if string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
			if (typeof value === "string" && value.indexOf(" ") >= 0) {
				value = "'" + value + "'";
			}
			arr.push(key + "=" + value);
		}
	}
	return arr.toString();
}

var orm = {
    // SELECT * FROM ?;
    all: function (table, callback) {
        var queryString = "SELECT * FROM ??;";
        connection.query(queryString, table, function(err, result) {
            if (err) throw err;
            callback(result);
        });
    },
    // INSERT INTO burgers (burger_name, devoured) VALUES ('A', 0);
    create: function (table, cols, vals, callback) {
        var queryString = "INSERT INTO " + table;
        queryString += " (" + cols.toString() + ") ";
        queryString += "VALUES";
        queryString += " (" + printQuestionMarks(vals.length) + ") ";
        console.log(queryString);

        connection.query(queryString, vals, function (err, result) {
            if (err) throw err;
            callback(result);
        });
    },
    // UPDATE burgers SET burger_name = ?, devoured = ? WHERE id = ?;
    update: function (table, obj, condition, callback) {
        var queryString = "UPDATE " + table;
        queryString += " SET " + objToSql(obj);
        queryString += " WHERE " + condition;
        console.log(queryString);

        connection.query(queryString, function(err, result) {
            if (err) throw err;
            callback(result);
        });
    },

    // DELETE FROM burgers WHERE id = ?;
    delete: function (table, condition, callback) {
        var queryString = "DELETE FROM " + table;
        queryString += " WHERE " + condition;
        console.log(queryString);

        connection.query(queryString, function(err, result) {
            if (err) throw err;
            callback(result);        
        });

    }
}


module.exports = orm;
