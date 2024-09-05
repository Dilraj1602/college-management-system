const User = require('../Model/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();

exports.auth = async (req, res, next) => {
    try {
        const token = req.User.token;
        if (!token) {
            return res.status(401).json({
                success: false,
                message: "Access denied"
            });
        }

        try {
            const decoded = jwt.verify(token, process.env.SECRET_KEY);
            console.log(decoded);
            req.User = decoded; 
            next(); 
        } catch (err) {
            return res.status(401).json({
                success: false,
                message: "Invalid token"
            });
        }

    } catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            message: "Internal server error"
        });
    }
};

exports.isUser = async (req, res, next) => {
    try {
        if (req.User.role === "user") {
            return next();
        }
        return res.status(403).json({
            success: false,
            message: "User access only"
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            message: "Internal server error in user"
        });
    }
};

exports.isAdmin = async (req, res, next) => {
    try {
        if (req.User.role === "admin") {

            return next();
        }
        return res.status(403).json({
            success: false,
            message: "Admin access only"
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            message: "Internal server error in admin"
        });
    }
};
