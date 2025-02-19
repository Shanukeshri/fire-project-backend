const express = require("express");
const User = require("../models/login");

const router = express.Router();

// GET user by email and password
router.get("/user", async (req, res) => {
  try {
    const { email, password } = req.body; // Get email & password from request

    // Find user by email and password
    const user = await User.findOne({ email, password }).select("-password");
    if (!user) return res.status(404).json({ error: "Invalid email or password" });

    res.json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
