const express = require("express");
const router = express.Router();
const Restaurant = require("../models/Restaurant");

/**
 
 * http://localhost:3000/restaurants
 */
router.get("/", async (req, res) => {
  const sort = req.query.sortBy === "DESC" ? -1 : 1;

  const data = await Restaurant.find()
    .select("_id cuisine name city restaurant_id")
    .sort({ restaurant_id: sort });

  res.json(data);
});


 
router.get("/cuisine/:cuisine", async (req, res) => {
  const data = await Restaurant.find({ cuisine: req.params.cuisine });
  res.json(data);
});


router.get("/Delicatessen", async (req, res) => {
  const data = await Restaurant.find({
    cuisine: "Delicatessen",
    city: { $ne: "Brooklyn" }
  })
    .select("cuisine name city -_id")
    .sort({ name: 1 });

  res.json(data);
});

module.exports = router;
