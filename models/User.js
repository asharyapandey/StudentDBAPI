const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
	fName: String,
	lName: String,
	username: String,
	password: String,
});

module.exports = mongoose.model("User", userSchema);
