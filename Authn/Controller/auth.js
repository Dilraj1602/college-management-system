
const User = require('../Model/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();

exports.signup = async (req, res) => {
    try{
        const {name, email, password, role} = req.body;

        const existUser = await User.findOne({email});
        if(existUser){
            return res.status(400).json({
                success: false,
                message: "User already exist"
            })
        }
        let hashPassword;
        try{
            hashPassword = await bcrypt.hash(password, 10);
        }catch(err){
            return res.status(500).json({
                success: false,
                message: "Password encryption failed"
            })
        }

        const newUser = new User({
            name,
            email,
            password: hashPassword,
            role
        })

        const savedUser = await newUser.save();

        return res.send({
          success: true,
          message: "User created successfully",  
        })

    }catch(err){
        console.log(err);
        res.send({
            success: false,
            message:"User creation failed"
        })
    }
}

exports.login = async (req, res) => {
    try{
        const {email, password} = req.body;

        const existUser = await User.findOne({email});
        if(!existUser){
            console.log("User not found");

            return res.send({
                success: false,
                message: "User not found"
            })
        }

        const isPasswordValid = await bcrypt.compare(password, existUser.password);

        if(!isPasswordValid){
            return res.send({
                success: false,
                message: "Invalid password"
            })
        }

        const token = jwt.sign({
            email: existUser.email,
            userId: existUser._id,
            role: existUser.role
        }, process.env.JWT_SECRET, {
            expiresIn: "1h"
        })
        existUser.token = token;
        existUser.password = undefined;

        const options={
            expires: new Date(Date.now()+ 1*24*60*60*1000),
            httpOnly:true
        }

        res.cookie('token', token,options).status(200).json({
            success: true,
            token,
            existUser,
            message: "Login successful",
        })
        
    }catch(err){
        console.log(err);
        res.send({
            success: false,
            message: "Login failed try again"
        })
    }
}


