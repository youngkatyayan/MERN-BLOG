import express from 'express'
import mongoose from 'mongoose';
import dotenv from 'dotenv'
const app=express();
dotenv.config()

mongoose.connect(process.env.MONGO_URl).then(()=>{
    console.log("database successfully connect.")
}).catch((error)=>{
    console.log(error.message,"database connection error")
})

app.get("/",(req,res)=>{
    res.send("server is ready")
})
const port=3000|| process.env.PORT
 app.listen(port,()=>{
    console.log(`sever is running at the server :${port}`)
 })