const express = require("express");
const router = express.Router();

// Import the controller functions
const attendanceController = require("../controllers/attendanceController");

// Define the routes and link them to the appropriate functions
// GET /attendance/students -> To get the list of students
router.get("/students", attendanceController.getAllStudents);

// GET /attendance -> To get all attendance records
router.get("/", attendanceController.getAttendanceRecords);

// POST /attendance -> To record a new student attendance
router.post("/", attendanceController.recordAttendance);

module.exports = router;
