const Organizer = require('../model/organizer.models');

exports.addOrganizer = async (req, res) => {
    try {
        const { organizationName, organizerName, contactNumber, address } = req.body;
        const newOrganizer = new Organizer({ organizationName, organizerName, contactNumber, address });
        await newOrganizer.save();
        res.status(201).json({ message: 'Organizer added successfully', organizer: newOrganizer });
    } catch (error) {
        res.status(500).json({ message: 'Error adding organizer', error });
    }
};

exports.getOrganizers = async (req, res) => {
    try {
        const organizers = await Organizer.find();
        res.status(200).json({ message: 'Organizers fetched successfully', organizers });
    } catch (error) {
        res.status(500).json({ message: 'Error fetching organizers', error });
    }
};

exports.updateOrganizer = async (req, res) => {
    try {
        const { id } = req.params;
        const { organizationName, organizerName, contactNumber, address } = req.body;
        const updatedOrganizer = await Organizer.findByIdAndUpdate(id, { organizationName, organizerName, contactNumber, address }, { new: true });
        res.status(200).json({ message: 'Organizer updated successfully', organizer: updatedOrganizer });
    } catch (error) {
        res.status(500).json({ message: 'Error updating organizer', error });
    }
};

exports.deleteOrganizer = async (req, res) => {
    try {
        const { id } = req.params;
        await Organizer.findByIdAndDelete(id);
        res.status(200).json({ message: 'Organizer deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting organizer', error });
    }
};
