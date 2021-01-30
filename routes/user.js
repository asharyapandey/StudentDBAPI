const express = require("express");

const Router = express.Router();
const User = require("../models/User");
const { signToken } = require("../utils/utils");

Router.post("/", async (req, res) => {
	try {
		const { fName, lName, username, password } = req.body;
		// check to see the duplicate user
		const tryUser = await User.findOne({ username });
		if (tryUser)
			return res.status(409).json({ error: "Username already exixts" });

		const user = new User({ fName, lName, username, password });
		await user.save();
		res.status(200).json(user);
	} catch (error) {
		console.log(error);
		res.status(500).json({ error: "Could not register user" });
	}
});

Router.get("/", async (req, res) => {
	try {
		const { username, password } = req.body;

		const user = await User.findOne({ username });

		if (!user)
			return res.status(400).json({ error: "Invalid Credentials" });

		if (user.password === password) {
			const token = signToken(user);
			return res.status(200).json({
				token,
				user,
			});
		}
	} catch (error) {
		console.log(error);
		res.status(500).json({ error: "Could not login user" });
	}
});

module.exports = Router;
