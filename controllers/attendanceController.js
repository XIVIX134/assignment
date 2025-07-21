// Temporary mock data (in place of a real database)
let students = [
  { id: 1, name: "Ahmed Ali" },
  { id: 2, name: "Fatima Al-Zahra" },
  { id: 3, name: "Yusuf Mahmoud" },
];

let attendanceRecords = []; // We will store attendance records here

// Function to get the list of all students
exports.getAllStudents = (req, res) => {
  res.status(200).json(students);
};

// Function to get all attendance records
exports.getAttendanceRecords = (req, res) => {
  res.status(200).json(attendanceRecords);
};

// Function to record a student's attendance
exports.recordAttendance = (req, res) => {
  const { studentId } = req.body;

  // Check if studentId is provided in the request body
  if (!studentId) {
    return res.status(400).json({ message: "The studentId field is required" });
  }

  // Check if the student exists in our list
  const student = students.find((s) => s.id === parseInt(studentId));
  if (!student) {
    return res.status(404).json({ message: "Student not found" });
  }

  // Create a new attendance record
  const newRecord = {
    recordId: attendanceRecords.length + 1, // Unique ID for the record
    studentId: parseInt(studentId),
    studentName: student.name,
    timestamp: new Date().toISOString(), // The date and time of recording
  };

  // Add the new record to our list
  attendanceRecords.push(newRecord);

  // Send a success response with the data of the new record
  res.status(201).json(newRecord);
};
