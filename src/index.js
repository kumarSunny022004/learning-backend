// require('dotenv').config({path:'./env'})
import dotenv from "dotenv"
import connectDB from './db/index.js';


dotenv.config({
    path:'./env'  
})



connectDB()
  .then(() => {
   app.on("error", (error)=>{
      console.log("server error", error);
   })
    app.listen(process.env.PORT || 8000, () => {
      console.log(`App is listening on PORT ${process.env.PORT || 8000}`);
    });
  })
  .catch((error) => {
    console.log("MongoDB connection failed, look for vulnerabilities", error);
  });










/*
import express from 'express';
const app = express();

// Connect to the database
;(async ()=>{
   try{
   await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
   app.on("error",()=>{
    console.log("ERROR:", error);
    throw error
   })

   app.listen(process.env.PORT, ()=>{
      console.log(`app is listning on PORT ${process.env.PORT}`)
   })

   } catch(error){
         console.error("ERROR: " ,error)
         throw err
   }
})()
   */