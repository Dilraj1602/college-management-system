const mongoose = require('mongoose');
require('dotenv').config();

const dbconnect = ()=>{

    const port = process.env.port || 3000;
    const DATABASE_URL = process.env.DATABASE_URL;
    
    mongoose.connect(DATABASE_URL, {
        useNewUrlParser: true, useUnifiedTopology: true
    }).then(()=>{
        console.log('Database connected');
    }).catch((err)=>{
        console.log('Database connection error: ', err);
    });
}

module.exports = dbconnect;