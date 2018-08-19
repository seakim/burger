var orm = require("../config/orm.js");

var burger = {
    all: function (callback) {
        orm.selectAllFrom("burgers", function(res) {
            callback(res);
            console.log(res[0].burger_name);
            console.log(res[0].devoured);
        });
    },
    create: function () {
        
    },
    update: function () {

    }
}

module.exports = burger;