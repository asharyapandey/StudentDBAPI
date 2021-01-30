const express = require("express");

const Router = express.Router();

const Student = require("../models/Student");

const { verifyUser } = require("../middleware/auth");

Router.post("/", verifyUser, async (req, res) => {
	try {
		const { fullName, age, gender, address } = req.body;

		const student = new Student({ fullName, age, gender, address });
		await student.save();
		res.status(200).json(student);
	} catch (error) {
		console.log(error);
		return res.status(500).json({ error: "Cound not add student" });
	}
});

Router.get("/", verifyUser, async (req, res) => {
	try {
		const students = await Student.find();
		return res.status(200).json(students);
	} catch (error) {
		console.log(error);
		return res.status(500).json({ error: "Cound not retrieve student" });
	}
});

Router.get("/:id", verifyUser, async (req, res) => {
	try {
		const id = req.params.id;
		const student = await Student.findOne({ _id: id });
		return res.status(200).json(student);
	} catch (error) {
		console.log(error);
		return res.status(500).json({ error: "Cound not retrieve student" });
	}
});

Router.put("/:id", verifyUser, async (req, res) => {
	try {
		const id = req.params.id;
		const { fullName, age, gender, address } = req.body;

		const student = await Student.findOne({ _id: id });
		student.fullName = fullName;
		student.age = age;
		student.gender = gender;
		student.address = address;
		await student.save();

		return res.status(200).json(student);
	} catch (error) {
		console.log(error);
		return res.status(500).json({ error: "Cound not update student" });
	}
});
Router.delete("/:id", verifyUser, async (req, res) => {
	try {
		const id = req.params.id;
		const student = await Student.deleteOne({ _id: id });
		return res.status(200).json(student);
	} catch (error) {
		console.log(error);
		return res.status(500).json({ error: "Cound not retrieve student" });
	}
});

module.exports = Router;
