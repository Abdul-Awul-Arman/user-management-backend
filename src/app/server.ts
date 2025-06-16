import { Server } from "http";
import mongoose from "mongoose";
import app from "./app";

let server:Server;
 
const dataBaseUrl="mongodb+srv://monogdb:monogdb@cluster0.0nilmbf.mongodb.net/todosDB?retryWrites=true&w=majority&appName=Cluster0";

async function main(){
    try{
        await mongoose.connect(dataBaseUrl)

        console.log("Database connect successfully")

        server=app.listen(4000,()=>{

            console.log("App is listen is port 4000");

        })

    }catch(error){

    }
};

main()