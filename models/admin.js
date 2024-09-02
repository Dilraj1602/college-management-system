const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
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
    Facilities: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Facility',  
        required: true
    }],
    Students: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Student',  
        required: true
    }]
});

module.exports = mongoose.model('Admin', adminSchema);
