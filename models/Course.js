const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    facility: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Facility',  
        required: true
    },
    students: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Student' 
    }]
}, {
    timestamps: true  
});

module.exports = mongoose.model('Course', courseSchema);
