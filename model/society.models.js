const mongoose = require('mongoose');

const societySchema = new mongoose.Schema({
    societyName: {
        type: String,
        required: true
    },
    pramukhName: {
        type: String,
    },
    pramukhNumber: {
        type: String,
    },
    spot: {
        type: String,
    },
    status: {
        type: String,
        enum: ['Done', 'Pending'],
        default: 'Pending'
    },
    programDate: {
        type: Date,
    },
    area: {
        type: String,
        required: true
    },
    description: {
        type: String,
    },
    seminarDemo: {
        type: Boolean,
        default: false
    },
    satisfaction: {
        type: Boolean,
        required: true,
        default: false
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Society', societySchema);

/*
Postman Collection:

1. Create Society
POST http://localhost:3000/society
Body: {
    "societyName": "Test Society",
    "pramukhName": "John Doe",
    "pramukhNumber": "1234567890",
    "spot": "Location",
    "area": "Test Area",
    "description": "Test Description",
    "programDate": "2023-12-31"
}

2. Get All Societies 
GET http://localhost:3000/society

3. Get Society by ID
GET http://localhost:3000/society/:id

4. Update Society
PUT http://localhost:3000/society/:id
Body: {
    "societyName": "Updated Society",
    "area": "Updated Area"
}

5. Update Status
PATCH http://localhost:3000/society/:id/status
Body: {
    "status": "Done"
}

6. Update Seminar Demo
PATCH http://localhost:3000/society/:id/seminar-demo
Body: {
    "seminarDemo": true
}

7. Update Satisfaction
PATCH http://localhost:3000/society/:id/satisfaction
Body: {
    "satisfaction": true
}

8. Delete Society
DELETE http://localhost:3000/society/:id
*/
