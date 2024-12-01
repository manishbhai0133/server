const express = require('express');
const router = express.Router();
const studentController = require('../controller/student.controllers');

// Create new student
router.post('/', studentController.createStudent);

// Get all students
router.get('/', studentController.getAllStudents);

// Get student by ID 
router.get('/:id', studentController.getStudentById);

// Update student
router.put('/:id', studentController.updateStudent);

// Update attend seminar status
router.patch('/:id/attend-seminar', studentController.updateAttendSeminar);

// Update attend demo status
router.patch('/:id/attend-demo', studentController.updateAttendDemo);

// Update followup details
router.patch('/:id/followup', studentController.updateFollowupDetails);

// Delete student
router.delete('/:id', studentController.deleteStudent);

module.exports = router;
