const mongoose = require('mongoose');
const Student = require('../models/student');
const Course = require('../models/Course');

const FacilityController = {
    addCourse: async (req, res) => {
        try {
            const { name, description, facilityId } = req.body;

            const facility = await mongoose.model('Facility').findById(facilityId);
            if (!facility) return res.status(404).send('Facility not found');

            const course = new Course({
                name,
                description,
                facility: facilityId 
            });

            await course.save();
            res.status(200).send('Course added successfully');
        } catch (err) {
            res.status(500).send('Error adding course: ' + err.message);
        }
    },

    removeCourse: async (req, res) => {
        try {
            const { courseId } = req.body;

            const course = await Course.findById(courseId);
            if (!course) return res.status(404).send('Course not found');

            await course.remove();
            res.status(200).send('Course removed successfully');
        } catch (err) {
            res.status(500).send('Error removing course: ' + err.message);
        }
    },

    assignStudentToCourse: async (req, res) => {
        try {
            const { studentId, courseId } = req.body;

            const course = await Course.findById(courseId);
            if (!course) return res.status(404).send('Course not found');

            const student = await Student.findById(studentId);
            if (!student) return res.status(404).send('Student not found');

            if (course.students.includes(studentId)) {
                return res.status(400).send('Student is already enrolled in the course');
            }

            course.students.push(studentId);
            await course.save();

            res.status(200).send('Student assigned to course successfully');
        } catch (err) {
            res.status(500).send('Error assigning student to course: ' + err.message);
        }
    },

    removeStudentFromCourse: async (req, res) => {
        try {
            const { studentId, courseId } = req.body;

            const course = await Course.findById(courseId);
            if (!course) return res.status(404).send('Course not found');

            if (!course.students.includes(studentId)) {
                return res.status(400).send('Student is not enrolled in the course');
            }

            course.students.pull(studentId);
            await course.save();

            res.status(200).send('Student removed from course successfully');
        } catch (err) {
            res.status(500).send('Error removing student from course: ' + err.message);
        }
    }
};

module.exports = FacilityController;
