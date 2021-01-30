const jwt = require("jsonwebtoken");

const verifyUser = (req, res, next) => {
	const token = req.headers.token;

	if (!token) return res.status(401).json({ error: "Token Not Found" });

	try {
		const userID = jwt.verify(token, "secret");
		req.user = userID;
		next();
	} catch (error) {
		console.log(error);
		return res.status(401).json({ error: "Invalid Token" });
	}
};

module.exports = {
	verifyUser,
};
