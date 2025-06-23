import express, { Request, Response } from "express";
import { Users } from "../model/users.model";

export const userRoute=express.Router();


//route for create user
userRoute.post("/create-user",async (req:Request,res:Response)=>{
    const body=req.body
    try{

        const user=await Users.create(body)
        res.status(201).json(
            {
              success:true,
              message:"User created successfully",
              user:body
            }
        );
    }
    catch(error:any){
        if(error.errorResponse.code ===11000){
            res.status(409).json({
                success:false,
            message:"User already registered with this email ",
            })
        }
        else{

            res.status(400).json(
                {
                    success:false,
                    message:"Failed to create user",
                    error:error.errorResponse.code 
                }
            )
        }
    }
})
//route for update user
userRoute.patch("/update",async(req:Request,res:Response)=>{
    const filter=req.query;
    const body=req.body
   try{

       const user= await Users.findOneAndUpdate(filter,body,{new:true}) 
       if(!user){
        res.status(404).json({
            updateSuccess:false,
            message:"User not found"
         });
       }
       else
       {

           res.status(200).json({
               updateSuccessfully:true,
               message:"User updated successfully",
               user:user
            });
        }
     
   }catch(error:any)
   {
     if(error.errorResponse.code ===11000){
            res.status(409).json({
                updateSuccessfully:false,
            message:"User already registered with this email ",
            })
        }
        else{

            res.status(400).json(
                {
                    updateSuccessfully:false,
                    message:"Failed to create user",
                    error:error.errorResponse.code 
                }
            )
        }


   }
  
    

})
//route for delete user
userRoute.delete("/delete",async(req:Request,res:Response)=>{
    const filter=req.query;
    try{
        
        const user=await Users.findOneAndDelete(filter,{new:true})

        if(!user){
            res.json({
                deleteSuccessfully:false,
                message:"User not found"
             });
           }
           else
           {
    
               res.json({
                   deleteSuccessfully:true,
                   message:"User deleted successfully",
                   user:user
                });
            }
         

    }
    catch(error:any){
        res.json(
            {
            updateSuccess:false,
            error:error.message
        })

    }

})

