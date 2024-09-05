
const express=require('express');
const app=express();

require('dotenv').config();
const port=process.env.port || 4000;


app.use(express.json());

const dbconnect=require('./Config/database');
dbconnect();

const user=require('./Routes/User');

app.use("/api/v1",user);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

app.get('/',(req,res)=>{
    res.send('Hello mitra');
})


