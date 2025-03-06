const mongoose = require('mongoose');

const OrganizerProgram = new mongoose.Schema(
  {
    organizer: {
      type: String,
      required: true,
    },
    contactInfo: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      default: '',
    },
    showPoints: {
      type: String,
      required: true,
    },
    eventDate: {
      type: Date,
      required: true,
    },
    startTime: {
      type: Date,
      required: true,
    },
    endTime: {
      type: Date,
      required: true,
    },
  },
  {
    timestamps: true, // Automatically adds createdAt and updatedAt fields
  }
);

// Create the model from the schema
const Organizer = mongoose.model('OrganizerProgram', OrganizerProgram);

module.exports = Organizer;
