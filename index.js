const express = require('express')
const app = express()
const mongoose =require("mongoose")
const dotenv=require('dotenv')
const helmet=require("helmet")
const morgan=require('morgan')
dotenv.config()
app.use(express.json())
app.use(helmet())
app.use(morgan("common"))
mongoose.set("strictQuery",true);
// data base connection
mongoose.connect(process.env.MONGO_URL).then(()=>console.log("Connected to MongoDB")).catch((err)=>{console.log(err);});


// import all the route 
const userRoute =require("./routes/user")
const authRoute=require("./routes/auth")
const postRoute=require("./routes/post")

app.use("/api/user",userRoute);
app.use("/api/auth",authRoute);
app.use("/api/post",postRoute);


app.listen(process.env.PORT || 5000,()=>{

   console.log("Server Connected ");

})