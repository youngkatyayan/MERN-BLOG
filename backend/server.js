import express from 'express'
import mongoose from 'mongoose';
import dotenv from 'dotenv'
// Here you can change router name == router is here but change the name so write userRouter
import userRouter from './routes/user.routes.js';
import userSignup from './routes/auth.routes.js'

const app=express();
dotenv.config()
app.use(express.json())
// database connection
mongoose.connect(process.env.MONGO_URl).then(()=>{
    console.log("database successfully connected.")
}).catch((error)=>{
    console.log(error.message,"database connection error")
})

// app.get("/test",(req,res)=>{
//     res.send("Server is ready")
// })

app.use("/api/user",userRouter)
app.use("/api/user",userSignup)

app.use((err,req,res,next)=>{
    const statuscode=err.statuscode ||500;
    const message=err.message || "Internal server error"
    res.status(statuscode).json({
       success:false,
        statuscode,
        message
    })
})












// srver port
const port=3000|| process.env.PORT
 app.listen(port,()=>{
    console.log(`sever is running at the server :${port}`)
 })