const Student = require('../model/student.models');

// Create new student
exports.createStudent = async (req, res) => {
    try {
        const student = new Student(req.body);
        const savedStudent = await student.save();
        res.status(201).json({ success: true, message: 'Student created successfully', data: savedStudent });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

// Get all students
exports.getAllStudents = async (req, res) => {
    try {
        const students = await Student.find().populate('societyName');
        res.status(200).json({ success: true, message: 'Students fetched successfully', data: students });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// Get student by ID
exports.getStudentById = async (req, res) => {
    try {
        const student = await Student.findById(req.params.id).populate('societyName');
        if (!student) {
            return res.status(404).json({ success: false, message: 'Student not found' });
        }
        res.status(200).json({ success: true, message: 'Student fetched successfully', data: student });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// Update student
exports.updateStudent = async (req, res) => {
    try {
        const updatedStudent = await Student.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        ).populate('societyName');
        
        if (!updatedStudent) {
            return res.status(404).json({ success: false, message: 'Student not found' });
        }
        res.status(200).json({ success: true, message: 'Student updated successfully', data: updatedStudent });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

// Update attendSeminar status
exports.updateAttendSeminar = async (req, res) => {
    try {
        const { attendSeminar } = req.body;
        if (typeof attendSeminar !== 'boolean') {
            return res.status(400).json({ success: false, message: 'Invalid attendSeminar value' });
        }

        const updatedStudent = await Student.findByIdAndUpdate(
            req.params.id,
            { attendSeminar },
            { new: true }
        ).populate('societyName');
        
        if (!updatedStudent) {
            return res.status(404).json({ success: false, message: 'Student not found' });
        }
        res.status(200).json({ success: true, message: 'Student attendSeminar status updated successfully', data: updatedStudent });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

// Update attendDemo status
exports.updateAttendDemo = async (req, res) => {
    try {
        const { attendDemo } = req.body;
        if (typeof attendDemo !== 'boolean') {
            return res.status(400).json({ success: false, message: 'Invalid attendDemo value' });
        }

        const updatedStudent = await Student.findByIdAndUpdate(
            req.params.id,
            { attendDemo },
            { new: true }
        ).populate('societyName');
        
        if (!updatedStudent) {
            return res.status(404).json({ success: false, message: 'Student not found' });
        }
        res.status(200).json({ success: true, message: 'Student attendDemo status updated successfully', data: updatedStudent });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

// Update followup details
exports.updateFollowupDetails = async (req, res) => {
    try {
        const { followupDetails } = req.body;
        if (!followupDetails) {
            return res.status(400).json({ success: false, message: 'Followup details are required' });
        }

        const updatedStudent = await Student.findByIdAndUpdate(
            req.params.id,
            { followupDetails },
            { new: true }
        ).populate('societyName');
        
        if (!updatedStudent) {
            return res.status(404).json({ success: false, message: 'Student not found' });
        }
        res.status(200).json({ success: true, message: 'Student followup details updated successfully', data: updatedStudent });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

// Delete student
exports.deleteStudent = async (req, res) => {
    try {
        const student = await Student.findByIdAndDelete(req.params.id);
        if (!student) {
            return res.status(404).json({ success: false, message: 'Student not found' });
        }
        res.status(200).json({ success: true, message: 'Student deleted successfully' });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};
