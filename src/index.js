import mongoose from 'mongoose';
import { DB_NAME } from './constants';

import express from 'express';
const app = express();

// Connect to the database
;(async ()=>{
   try{
   await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
   app.on("error",()=>{
    console.log("ERROR:", error);
   })
   } catch(error){
         console.error("ERROR: " ,error)
         throw err
   }
})()