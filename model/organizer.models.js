const mongoose = require('mongoose');

const organizerSchema = new mongoose.Schema({
    organizationName: { type: String, required: true },
    organizerName: { type: String, required: true },
    contactNumber: { type: String, required: true },
    address: { type: String, required: true },
});

module.exports = mongoose.model('Organizer', organizerSchema);
