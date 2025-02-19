const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    urgency: {type : String , required : true},
    address: { type: String, required: true }
});

const alerts = mongoose.model("alerts", userSchema);
module.exports = alerts;
