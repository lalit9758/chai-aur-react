import express, { request } from "express";
import mongoose from "mongoose";
import {PORT,mongoDBURL} from "./config.js";
import { Book } from "./models/bookModel.js";
import booksRoute from './routes/booksRoute.js';
import cors from 'cors';  // for enabling cross-origin resource sharing (CORS) policy  // npm install cors

const app = express();
app.use(express.json());
app.use(cors())
// app.use(cors({
//     origin: "http://localhost:3000",
//     methods: ["GET", "POST","PUT","DELETE"],
//     allowedHeader: ["Content-Type"]
// }));


app.get('/',(request,response)=>{
    console.log(request);
    return response.status(234).send('Welcome to MERN stack Tutorial');
})

app.use('/books/',booksRoute);

mongoose
.connect(mongoDBURL)
.then(() => {
    console.log("App connectet to database")
    app.listen(PORT, ()=>{
        console.log(`App is listening to port: ${PORT}`);
    });
})
.catch((error)=>{
    console.log(error);
})