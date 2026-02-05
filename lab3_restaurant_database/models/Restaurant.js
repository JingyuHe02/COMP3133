const mongoose = require("mongoose");

const RestaurantSchema = new mongoose.Schema(
  {
    restaurant_id: String,
    name: String,
    borough: String,
    cuisine: String,
    city: String
  },
  { collection: "Restaurants" }
);

module.exports = mongoose.model("Restaurant", RestaurantSchema);
