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
    res.json({ id: result.insertId });
  });
});
// Devour a Burger
router.post('/burger/eat/:id', function (req, res) {
  burger.updateOne(req.params.id, function() {
    res.redirect('/index');
  });
});

router.delete("/api/burgers/:id", (req, res) => {
  const condition = "id =" + req.params.id;

  burger.delete(condition, (result) => {
    if (result.affectedRows == 0) {
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});
// Export routes for server.js to use.
module.exports = router;
