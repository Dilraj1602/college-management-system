// adminController.js
const Admin = require('../models/admin');
const Student = require('../models/student');
const Facility = require('../models/facility');
const Course = require('../models/Course');

const AdminController = {

    assignFacilityToCourse: async (req, res) => {
        try {
            const { facilityId, courseId } = req.body;

            const course = await Course.findById(courseId);
            if (!course) return res.status(404).send('Course not found');

            const facility = await Facility.findById(facilityId);
            if (!facility) return res.status(404).send('Facility not found');

            course.facility = facilityId;
            await course.save();

            res.status(200).send('Facility assigned to course successfully');
        } catch (err) {
            res.status(500).send('Error assigning facility to course: ' + err.message);
        }
    },

    removeStudentFromCourse: async (req, res) => {
        try {
            const { studentId, courseId } = req.body;

            const course = await Course.findById(courseId);
            if (!course) return res.status(404).send('Course not found');

            course.students.pull(studentId);
            await course.save();

            res.status(200).send('Student removed from course successfully');
        } catch (err) {
            res.status(500).send('Error removing student from course: ' + err.message);
        }
    },

    addStudentToCourse: async (req, res) => {
        try {
            const { studentId, courseId } = req.body;

            const course = await Course.findById(courseId);
            if (!course) return res.status(404).send('Course not found');

            course.students.push(studentId);
            await course.save();

            res.status(200).send('Student added to course successfully');
        } catch (err) {
            res.status(500).send('Error adding student to course: ' + err.message);
        }
    },

    addFacility: async (req, res) => {
        try {
            const { name, email, password, courses } = req.body;

            const newFacility = new Facility({ name, email, password, courses });
            await newFacility.save();

            res.status(201).send('Facility added successfully');
        } catch (err) {
            res.status(500).send('Error adding facility: ' + err.message);
        }
    },

    addStudent: async (req, res) => {
        try {
            const { name, email, password, courses } = req.body;

            const newStudent = new Student({ name, email, password, courses });
            await newStudent.save();

            res.status(201).send('Student added successfully');
        } catch (err) {
            res.status(500).send('Error adding student: ' + err.message);
        }
    }
};

module.exports = AdminController;
