const mongoose = require("mongoose");

module.exports = async (URI) => {
	try {
		await mongoose.connect(URI, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		});
		console.log("MongoDB Connected!!!");
	} catch (error) {
		console.log(error);
	}
};
