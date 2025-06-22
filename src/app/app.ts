import express, { Application, Request, Response } from "express"
import { userRoute } from "./controllers/userController";

const app:Application=express();


app.use("/user",userRoute)




export default app;

