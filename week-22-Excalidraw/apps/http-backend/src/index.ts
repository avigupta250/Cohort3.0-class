import express from "express";
import  jwt  from "jsonwebtoken";
import { middleware } from "./middlewares";

const app=express();
export const JWT_SECRET="123"
app.get("/",(req,res)=>{
res.send("Hii there")
})

app.post("/signup",(req,res)=>{

})

app.post("/sigin",(req,res)=>{


    const userId=1;
   const token= jwt.sign({
            userId
    },JWT_SECRET)

    res.json({
        token
    })

})

app.post("/room",middleware,(req,res)=>{

    res.json({
        roomId:123
    })

})
app.listen(5000);