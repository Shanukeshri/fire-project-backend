const express = require("express");
const userData = require("../models/alerts");
require("dotenv").config();

const router = express.Router();

router.post("/alert", async (req, res) => {
  try {
    
    const { urgency , address } = req.body;
    
    if (!urgency || !address) return res.status(200).json({ error: "All meow fields are required" });

    const newUser = new userData({  urgency, address });
    await newUser.save();
    
    res.status(201).json({ message: "i love you" , alert : newUser});
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get("/alert", async (req, res) => {
    try {
      const alerts = await userData.find(); // Fetch all users from the database
      if (!alerts.length) return res.status(404).json({ error: "No users found" });
  
      res.status(200).json(alerts);
    } catch (err) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  });
module.exports = router;
