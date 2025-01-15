
import express from "express";

const app=express();

app.get("/healthCheck",(req,res)=>{
    res.send("Health is good")
})

app.get("/",(req,res)=>{
    res.send("Hii there")
})
app.listen(5000,()=>{
    console.log("App is up and running")
})