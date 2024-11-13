import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import cookieParser from "cookie-parser";

import userRoute from "./routes/user.route.js";
import messageRoute from "./routes/message.route.js";

dotenv.config();
const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors());



const port = process.env.PORT || 3000;
const MongoDB_URL = process.env.MONGODB_URI

try {
    mongoose.connect(MongoDB_URL);
    console.log("Successfully connected to DataBase");
} catch (error) {
    console.log(error);   
}


app.use("/api/user", userRoute);
app.use("/api/message", messageRoute);


app.listen(port, ()=>{
    console.log(`Server is running at port ${port}`);
});