const express = require('express');
const router = express.Router();
const societyController = require('../controller/society.controllers');

// Create new society
router.post('/', societyController.createSociety);

// Get all societies
router.get('/', societyController.getAllSocieties);

// Get society by ID 
router.get('/:id', societyController.getSocietyById);

// Update society
router.put('/:id', societyController.updateSociety);

// Update society status
router.patch('/:id/status', societyController.updateStatus);

// Update seminar demo status
router.patch('/:id/seminar-demo', societyController.updateSeminarDemo);

// Update satisfaction status
router.patch('/:id/satisfaction', societyController.updateSatisfaction);

// Delete society
router.delete('/:id', societyController.deleteSociety);

module.exports = router;
