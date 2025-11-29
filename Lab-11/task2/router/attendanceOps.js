const express = require('express');
const router = express.Router();

let students = [
  { name: "Ali Ahmed", rollNo: "CS101-001", present: true },
  { name: "Fatima Khan", rollNo: "CS101-002", present: false },
  { name: "Hassan Malik", rollNo: "CS101-003", present: true },
  { name: "Ayesha Siddiqui", rollNo: "CS101-004", present: true },
  { name: "Usman Ali", rollNo: "CS101-005", present: false },
  { name: "Zainab Raza", rollNo: "CS101-006", present: true }
];

// Get data of all students (present and absent)
router.get('/students', (req, res) => {
    res.status(200).json(students);
});

// Add a new student
router.post('/students', (req, res) => {
    const { name, rollNo, present } = req.body;
    
    const existingStudent = students.find(s => s.rollNo === rollNo);
    if (existingStudent) {
        return res.status(400).json({ error: 'Student with this roll number already exists' });
    }
    
    const newStudent = {
        name,
        rollNo,
        present: present || false
    };
    
    students.push(newStudent);
    res.status(201).json({ message: 'Student added successfully', student: newStudent });
});

// Update attendance status
router.patch('/students/:rollNo', (req, res) => {
    const { rollNo } = req.params;
    const index = students.findIndex(s => s.rollNo === rollNo);
    
    if (index === -1) {
        return res.status(404).json({ error: 'Student not found' });
    }
    
    students[index].present = req.body.present;
    res.status(200).json({ message: 'Attendance updated successfully', student: students[index] });
});

// Get data of all present students
router.get('/students/present', (req, res) => {
    const presentStudents = students.filter(s => s.present === true);
    res.status(200).json(presentStudents);
});

module.exports = router;