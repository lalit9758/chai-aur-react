import express from "express";
import mongoose from "mongoose";
import {PORT,mongoDBURL} from "./config.js";

const app = express();

app.get('/',(request,response)=>{
    console.log(request);
    return response.status(234).send('Welcome to MERN stack Tutorial');
})


mongoose
.connect(mongoDBURL)
.then(() => {
    app.listen(PORT, ()=>{
        console.log(`App is listening to port: ${PORT}`);
    });
})
.catch((error)=>{
    console.log(error);
})