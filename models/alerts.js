const mongoose = require("mongoose");

const alerts = new mongoose.Schema({
    urgency: {type : string , required : true},
    address: { type: String, required: true }
});

const userData = mongoose.model("User", UserSchema);
module.exports = alerts;
