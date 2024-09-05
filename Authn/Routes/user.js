
const express=require('express');
const router=express.Router();

const {login,signup}=require('../Controller/auth');
const {auth,isUser,isAdmin}=require('../middlewear/Auth');


router.post('/login',login);
router.post('/signup',signup);

router.get('/test',auth,(req,res)=>{
    res.send({
        success:true,
        message:"Access granted"
    })
})

router.get('/user',auth,isUser,(req,res)=>{
    res.send({
        success:true,
        message:"User access"
    })
})

router.get('/admin',auth,isAdmin,(req,res)=>{
    res.send({
        success:true,
        message:"Admin access"
    })
})

module.exports=router;