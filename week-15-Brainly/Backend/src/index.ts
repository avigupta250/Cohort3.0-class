import  Express  from "express";

const app=Express();

const PORT=3000;

app.get("/",(req,res)=>{
   res.send("Hi there")
})


app.listen(PORT,()=>{
    console.log("App is up and running")
})