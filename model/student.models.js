const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    studentName: {
        type: String,
        required: true
    },
    contactNumber: {
        type: String,
        required: true
    },
    attendSeminar: {
        type: Boolean,
        default: true
    },
    attendDemo: {
        type: Boolean,
        default: false
    },
    societyName: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Society',
        required: true
    },
    followupDetails: {
        type: String,
        default: ''
    }
}, {
    timestamps: true
});

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;

/*
Postman Collection for Student API:

1. Create Student (POST /student)
Request body:
{
    "studentName": "John Doe",
    "contactNumber": "1234567890",
    "societyName": "society_id"
}

2. Get All Students (GET /student)

3. Get Student by ID (GET /student/:id)

4. Update Student (PUT /student/:id)
Request body: Same as create

5. Update Attend Seminar Status (PATCH /student/:id/attend-seminar)
Request body:
{
    "attendSeminar": true/false
}

6. Update Attend Demo Status (PATCH /student/:id/attend-demo)
Request body:
{
    "attendDemo": true/false
}

7. Update Followup Details (PATCH /student/:id/followup)
Request body:
{
    "followupDetails": "Followup notes here"
}

8. Delete Student (DELETE /student/:id)
*/
