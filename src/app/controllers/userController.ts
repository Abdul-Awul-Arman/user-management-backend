import express, { Request, Response } from "express"

export const userRoute=express.Router();

//route for all get all users
userRoute.get("/users",(req:Request,res:Response)=>{
    const params=req.body;
    res.json({
       params
    });
    console.log(params)
});
//route for get single user
userRoute.get("/:userEmail",(req:Request,res:Response)=>{
    const params=req.body;
    res.json({
       params
    });
    console.log(params)
});
//route for create user
userRoute.post("/create-user",(req:Request,res:Response)=>{
    const params=req.params;
    res.json({
       params
    });
    console.log(params)
})
//route for update user
userRoute.patch("/update-user",(req:Request,res:Response)=>{
    const params=req.params;
    res.json({
       params
    });
    console.log(params)
})
//route for delete user
userRoute.get("/delete-user",(req:Request,res:Response)=>{
    const params=req.params;
    res.json({
       params
    });
    console.log(params)
})

