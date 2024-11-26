import  Express  from "express";
import connectDb from "../config/connectDb"
import userRoutes from "../routes/userRoutes"
import contentRoutes from "../routes/contentRoutes"
import linkRoutes from "../routes/linkRoutes"
import auth from "../middlewares/auth"
import { createLink,shareLink } from "../controllers/Link";

const app=Express();

const PORT=3000;

connectDb();
app.use(Express.json())

console.log("Before Routs")

app.use("/api/v1",userRoutes);

app.get("/api/v1/brain/:shareLink",shareLink)
// above sharelink route no one is using auth  then its not automaticlly called
app.use("/api/v1/",auth,contentRoutes)
app.post("/api/v1/brain/share",auth,createLink)
app.get("/api/v1/brain/:shareLink",shareLink)


console.log("After all routes")




app.get("/",(req,res)=>{
   res.send("Hii there")
})


app.listen(PORT,()=>{
    console.log("App is up and running")
})