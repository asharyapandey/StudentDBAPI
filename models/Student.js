const mongoose = require("mongoose");

const studentSchema = mongoose.Schema({
	fullName: String,
	age: Number,
	gender: String,
	address: String,
});

module.exports = mongoose.model("Student", studentSchema);
