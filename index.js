
const express=require('express');
const app=express();

require('dotenv').config();


const mongoose=require('mongoose');
const port=process.env.PORT || 3000;
const bodyParser=require('body-parser');
const dbconnect = require('./config/database');

app.use(bodyParser.json());
const router=require('./routes/router');
app.use('/api/dbms',router);

app.get('/',(req,res)=>{
    res.send('Hello mitra');
})

app.listen(port,()=>{
    console.log('Server is running on port 3000');
})

dbconnect();