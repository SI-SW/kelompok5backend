import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import todoroute from "./routes/todoroute.js";
dotenv.config();

const app= express();

app.use(cors());
app.use(express.json());
app.use(todoroute);

app.listen(process.env.APP_PORT, ()=> {
    console.log('Server up and running...');
});