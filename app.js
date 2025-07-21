const express = require("express");

// Import routes and middleware
const attendanceRoutes = require("./routes/attendanceRoutes");
const logger = require("./middleware/logger");

// Create an Express application
const app = express();
const PORT = 3000;

// 1. Apply Middleware
// This built-in middleware allows the app to parse JSON from the request body (req.body)
app.use(express.json());
// This is our custom middleware for logging requests
app.use(logger);

// 2. Connect the Main Routes
// Any request starting with /attendance will be directed to attendanceRoutes
app.use("/attendance", attendanceRoutes);

// A welcome route for the root URL
app.get("/", (req, res) => {
  res.send("Welcome to the Student Attendance API");
});

// 3. Start the Server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
