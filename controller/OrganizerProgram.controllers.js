const Organizer = require('../model/OrganizerProgram.models');

// ✅ Create a new organizer program
exports.createOrganizer = async (req, res) => {
    try {
        const organizer = new Organizer(req.body);
        await organizer.save();
        res.status(201).json(organizer);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// ✅ Get all organizers sorted by eventDate (ascending order)
exports.getOrganizers = async (req, res) => {
    try {
        const organizers = await Organizer.find()
            .sort({ eventDate: 1, eventTime: 1 }); // Sorting first by eventDate, then by eventTime in ascending order
        res.status(200).json(organizers);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


// ✅ Get a single organizer by ID
exports.getOrganizerById = async (req, res) => {
    try {
        const organizer = await Organizer.findById(req.params.id);
        if (!organizer) {
            return res.status(404).json({ message: "Organizer not found" });
        }
        res.status(200).json(organizer);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// ✅ Update an organizer program by ID
exports.updateOrganizer = async (req, res) => {
    try {
        const organizer = await Organizer.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!organizer) {
            return res.status(404).json({ message: "Organizer not found" });
        }
        res.status(200).json(organizer);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// ✅ Delete an organizer program by ID
exports.deleteOrganizer = async (req, res) => {
    try {
        const organizer = await Organizer.findByIdAndDelete(req.params.id);
        if (!organizer) {
            return res.status(404).json({ message: "Organizer not found" });
        }
        res.status(200).json({ message: "Organizer deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
