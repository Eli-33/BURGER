const express = require("express");
const router = express.Router();
const burger = require("../models/burger.js");

// CURD functionality 
// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
    burger.selectAll(function(data) {
    const hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});
// Create a New Burger
router.post("/burger/create", function(req, res) {
  burger.insertOne( req.body.burger_name,function(result) {
    res.redirect('/');
    });
});
// Devour a Burger
router.post('/burger/eat/:id', function (req, res) {
  burger.updateOne(req.params.id, function() {
    res.redirect('/');
  });
});
// Export routes for server.js to use.
module.exports = router;
