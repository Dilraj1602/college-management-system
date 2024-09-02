
const mongoose = require('mongoose');
const Student = require('../models/student');
const Course = require('../models/Course');

const StudentController = {

    enrollInCourse: async (req, res) => {
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

            student.courses.push(courseId);
            await student.save();

            res.status(200).send('Student enrolled in course successfully');
        } catch (err) {
            res.status(500).send('Error enrolling student in course: ' + err.message);
        }
    }
};

module.exports = StudentController;
