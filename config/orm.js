// Import MySQL connection.
var connection = require("./connection.js");
// Object for all our SQL statement functions.
var orm = {
  selectAll: function(tableInput, cb) {
    var queryString = "SELECT * FROM " + tableInput + ";";
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  insertOne: function(burger_name, cb) {
    var queryString = "INSERT INTO burgers SET ? ";
    console.log(queryString);
    connection.query(queryString,{burger_name: burger_name,devoured: false}, function(err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  },
  updateOne: function(id, cb) {
    var queryString = "UPDATE burgers SET ? WHERE ?";

    console.log(queryString);
    connection.query(queryString,[{devoured: true}, {id: id}], function(err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  },

  delete: function(condition, cb) {
    var queryString = "DELETE FROM WHERE ?";
    // queryString += "  ";
    // queryString += condition;

    console.log(queryString);
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  }

};

// Export the orm object for the model (cat.js).
module.exports = orm;
