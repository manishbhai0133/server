const express = require('express');
const router = express.Router();
const organizerController = require('../controller/organizer.controller');

router.post('/organizers', organizerController.addOrganizer);
router.get('/organizers', organizerController.getOrganizers);
router.put('/organizers/:id', organizerController.updateOrganizer);
router.delete('/organizers/:id', organizerController.deleteOrganizer);

module.exports = router;
