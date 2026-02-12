const express = require("express");
const router = express.Router();
const User = require("../models/User");

/**
 * POST http://localhost:8081/users
 * Body: a user JSON document (see UsersData.json)
 * Validations (Lab04): required fields + format rules + unique email
 */
router.post("/", async (req, res) => {
  try {
    const created = await User.create(req.body);
    return res.status(201).json(created);
  } catch (err) {
    // Mongoose validation errors
    if (err.name === "ValidationError") {
      const details = Object.keys(err.errors).map((key) => ({
        field: key,
        message: err.errors[key].message,
      }));
      return res.status(400).json({
        error: "ValidationError",
        details,
      });
    }

    // Duplicate key (unique email) error
    if (err.code === 11000) {
      return res.status(400).json({
        error: "DuplicateKeyError",
        message: "email must be unique",
        keyValue: err.keyValue,
      });
    }

    return res.status(500).json({ error: "ServerError", message: err.message });
  }
});

module.exports = router;
