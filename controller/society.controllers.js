const Society = require('../model/society.models');

// Create new society
exports.createSociety = async (req, res) => {
    try {
        const society = new Society(req.body);
        const savedSociety = await society.save();
        res.status(201).json({ success: true, message: 'Society created successfully', data: savedSociety });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

// Get all societies
exports.getAllSocieties = async (req, res) => {
    try {
        const societies = await Society.find();
        res.status(200).json({ success: true, message: 'Societies fetched successfully', data: societies });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// Get society by ID
exports.getSocietyById = async (req, res) => {
    try {
        const society = await Society.findById(req.params.id);
        if (!society) {
            return res.status(404).json({ success: false, message: 'Society not found' });
        }
        res.status(200).json({ success: true, message: 'Society fetched successfully', data: society });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// Update society
exports.updateSociety = async (req, res) => {
    try {
        const updatedSociety = await Society.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        if (!updatedSociety) {
            return res.status(404).json({ success: false, message: 'Society not found' });
        }
        res.status(200).json({ success: true, message: 'Society updated successfully', data: updatedSociety });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

// Update society status
exports.updateStatus = async (req, res) => {
    try {
        const { status } = req.body;
        if (!status || !['Done', 'Pending'].includes(status)) {
            return res.status(400).json({ success: false, message: 'Invalid status value' });
        }

        const updatedSociety = await Society.findByIdAndUpdate(
            req.params.id,
            { status },
            { new: true }
        );
        
        if (!updatedSociety) {
            return res.status(404).json({ success: false, message: 'Society not found' });
        }
        res.status(200).json({ success: true, message: 'Society status updated successfully', data: updatedSociety });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

// Update seminar demo status
exports.updateSeminarDemo = async (req, res) => {
    try {
        const { seminarDemo } = req.body;
        if (typeof seminarDemo !== 'boolean') {
            return res.status(400).json({ success: false, message: 'Invalid seminarDemo value' });
        }

        const updatedSociety = await Society.findByIdAndUpdate(
            req.params.id,
            { seminarDemo },
            { new: true }
        );
        
        if (!updatedSociety) {
            return res.status(404).json({ success: false, message: 'Society not found' });
        }
        res.status(200).json({ success: true, message: 'Society seminar demo status updated successfully', data: updatedSociety });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

// Update satisfaction status
exports.updateSatisfaction = async (req, res) => {
    try {
        const { satisfaction } = req.body;
        if (typeof satisfaction !== 'boolean') {
            return res.status(400).json({ success: false, message: 'Invalid satisfaction value' });
        }

        const updatedSociety = await Society.findByIdAndUpdate(
            req.params.id,
            { satisfaction },
            { new: true }
        );
        
        if (!updatedSociety) {
            return res.status(404).json({ success: false, message: 'Society not found' });
        }
        res.status(200).json({ success: true, message: 'Society satisfaction status updated successfully', data: updatedSociety });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

// Delete society
exports.deleteSociety = async (req, res) => {
    try {
        const society = await Society.findByIdAndDelete(req.params.id);
        if (!society) {
            return res.status(404).json({ success: false, message: 'Society not found' });
        }
        res.status(200).json({ success: true, message: 'Society deleted successfully' });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};
