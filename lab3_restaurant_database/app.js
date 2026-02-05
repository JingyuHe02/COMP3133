const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const restaurantRoutes = require("./routes/restaurants");

const app = express();
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error(err));

app.use("/restaurants", restaurantRoutes);

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
