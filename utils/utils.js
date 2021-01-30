const jwt = require("jsonwebtoken");

const signToken = (user) => {
	return jwt.sign({ id: user._id }, "secret");
};

module.exports = {
	signToken,
};
