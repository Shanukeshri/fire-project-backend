const express = require("express");
const userData = require("../models/data");
require("dotenv").config();

const router = express.Router();

// Register Route
router.post("/userData", async (req, res) => {
  try {
    const { name, email, phone , address } = req.body;
    if (!name || !email || !phone || !address) return res.status(400).json({ error: "All fields are required" });

    const existingUser = await userData.findOne({ email });
    if (existingUser) return res.status(400).json({ error: "Email already in use" });
    
    const newUser = new userData({ name, email, phone , address });
    await newUser.save();

    res.status(201).json({ message: "Data Enteres successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get("/userData", async (req, res) => {
  try {
    const { email } = req.query;
    if (!email) return res.status(400).json({ error: "Email is required" });

    const user = await userData.findOne({ email });
    if (!user) return res.status(404).json({ error: "User not found" });

    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
