
const mongoose = require('mongoose');
require('dotenv').config();

const dbconnect = async()=>{
    try {
        await mongoose.connect(process.env.DATABASE_URL,{
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Database connected');
    } catch (error) {
        console.log('Database connection failed');
    }
}

module.exports = dbconnect;