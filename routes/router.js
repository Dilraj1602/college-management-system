

const express = require('express');
const router = express();

const Admin = require('../models/admin');
const Student = require('../models/student');
const Facility = require('../models/facility');

const AdminController = require('../controllers/Admincontroller');
const FacilityController = require('../controllers/Facilitycontroller');
const StudentController = require('../controllers/StudentController');

router.post('/addcourse',StudentController.addCourse);
router.post('/removecourse',StudentController.removeCourse);
