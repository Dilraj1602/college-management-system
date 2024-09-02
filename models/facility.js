// facilitySchema.js
const mongoose = require('mongoose');

const facilitySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    courses: [{
        type: String,
        required: true
    }]
});

module.exports = mongoose.model('Facility', facilitySchema);
