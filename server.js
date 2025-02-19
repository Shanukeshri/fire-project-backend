require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./configuration/db");
const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");
const alertRoutes = require("./routes/alertRoutes");
const userDataRoutes = require("./routes/userDataRoutes.js");


const app = express();
app.use(express.json()); // Parse JSON requests
app.use(cors()); // Enable CORS

// Connect to MongoDB
connectDB();

// Define Routes
app.use("/api/auth", authRoutes);
app.use("/api", userRoutes);
app.use("/api", alertRoutes);
app.use("/api", userDataRoutes);
// Start Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
