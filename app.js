const express = require("express");

const app = express();

const PORT = 5000;
const MONGO_URI = "mongodb://localhost:27017/student_database";

// for database
const connectDB = require("./utils/database");

app.use(express.json());
// ROUTES
app.use("/api/user", require("./routes/user"));
app.use("/api/student", require("./routes/student"));

app.listen(PORT, (error) => {
	// connect database
	connectDB(MONGO_URI);
	console.log(`API started at port ${PORT}`);
});
