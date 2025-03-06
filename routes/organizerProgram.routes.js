const express = require('express');
const router = express.Router();
const organizerController = require('../controller/OrganizerProgram.controllers');

// Create a new organizer
router.post('/organizerProgram', organizerController.createOrganizer);

// Get all organizers
router.get('/organizerProgram', organizerController.getOrganizers);

router.get('/organizerProgram/:id', organizerController.getOrganizerById)
// ... other routes (update, delete) can be added here
router.put('/organizerProgram/:id', organizerController.updateOrganizer);

// ✅ Delete an organizer by ID
router.delete('/organizerProgram/:id', organizerController.deleteOrganizer);

module.exports = router;
