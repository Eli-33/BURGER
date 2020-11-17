// Import the ORM to create functions that will interact with the database.
const orm = require("../config/orm.js");

const burger = {
  selectAll: function(cb) {
    orm.selectAll("burgers", function(res) {
      cb(res);
    });
  },

  insertOne: function(burger_name,cb){
    orm.insertOne(burger_name,function(res){
      cb(res);
    });
  },
  
  updateOne: function(burger_id, cb) {
    orm.updateOne(burger_id, function(res) {
      cb(res);
    });
  },

  delete: function(condition,cb) {
    orm.delete("burgers",condition, (res) =>{
      cb(res);
    });
  }
};

// Export the database functions for the controller (burgersController.js).
module.exports = burger;
