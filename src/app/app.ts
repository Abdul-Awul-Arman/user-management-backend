import express, { Application, Request, Response } from "express"
import { userRoute } from "./controllers/userController";
import { Users } from "./model/users.model";

const app:Application=express();

app.use(express.json())

app.use("/user",userRoute)

app.get('/',async(req:Request,res:Response)=>{

    try{
        const users=await Users.find();

        res.status(200).json(users);
    }catch(error:any){
        res.status(500).json({
            success:false,
            message:error.message,
        })

    }

})




export default app;

