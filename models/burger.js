var orm = require("../config/orm.js");

var burger = {
    // SELECT * FROM ?;
    all: function (callback) {
        orm.all("burgers", function(res) {
            callback(res);
        });
    },
    // INSERT INTO burgers (burger_name, devoured) VALUES ('A', 0);
    create: function (cols, vals, callback) {
        orm.create("burgers", cols, vals, function(res) {
            console.log("1",res);
            callback(res);
        });
    },
    update: function () {

    }
}

module.exports = burger;