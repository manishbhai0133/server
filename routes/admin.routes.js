const express = require('express');
const router = express.Router();
const adminController = require('../controller/admin.controllers');

// Admin signup route
router.post('/signup', adminController.signup);

// Admin login route  
router.post('/login', adminController.login);

module.exports = router;
