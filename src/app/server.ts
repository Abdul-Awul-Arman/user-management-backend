import { Server } from "http";
import mongoose from "mongoose";
import app from "./app";

let server:Server;
 
const dataBaseUrl="mongodb://localhost:27017/userManagement";
const PORT=4000;

async function main(){
    try{
        await mongoose.connect(dataBaseUrl)

        console.log("Database connect successfully")

            server=app.listen(PORT,()=>{
            console.log(`App is listen is port ${PORT}`);

        })

    }catch(error){
        
        console.log(error);

    }
};

main()