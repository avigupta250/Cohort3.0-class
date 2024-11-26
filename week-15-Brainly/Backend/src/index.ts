import  Express  from "express";
import connectDb from "../config/connectDb"
import { sigin, signUp } from "../controllers/Auth";

const app=Express();

const PORT=3000;

connectDb();
app.use(Express.json())

app.post("/signup",signUp)
app.post("/signin",sigin)

app.get("/",(req,res)=>{
   res.send("Hii there")
})


app.listen(PORT,()=>{
    console.log("App is up and running")
})