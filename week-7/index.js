const express = require("express");
const { UserModel, TodoModel } = require("./db");
const { auth, JWT_SECRET } = require("./auth");
const bcrypt=require('bcrypt')
const {z}=require('zod')
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://avinashkumar25:avinashkumar@cluster0.4wonrxg.mongodb.net/todo-app").then(()=>{
    console.log("DB Connected")
}).catch((err)=>{
    console.log(`DB Connection Failed ${err}`)
})

const app = express();
app.use(express.json());

app.post("/signup", async function(req, res) {
   try{
    const reqBody = z.object({
        email: z.string().min(3).max(50).email(),
        password: z.string().min(6).refine((password) => /[A-Z]/.test(password), {message: "Required atleast one uppercase character"}).refine((password) => /[a-z]/.test(password), {message: "Required atleast one lowercase character"}).refine((password) => /[0-9]/.test(password), {message: "Required atleast one number"}).refine((password) => /[!@#$%^&*]/.test(password), {message: "Required atleast one special character"}),
        name: z.string().min(3).max(30)
        });
    
        const parseDataWithSuccess=reqBody.safeParse(req.body);
       
        if(!parseDataWithSuccess.success){
          
            res.json({
                message:parseDataWithSuccess.error.issues[0].message
            })
            return
        }
    const {email,password,name}=req.body;
    const hashedPass=await bcrypt.hash(password,10);

    await UserModel.create({
        email: email,
        password: hashedPass,
        name: name
    });

    res.json({
        message: "You are signed up"
    })
   }catch(e){
      res.json({
        message:e
      })
   }
    
    
});


app.post("/signin", async function(req, res) {
    const email = req.body.email;
    const password = req.body.password;

    const response = await UserModel.findOne({
        email: email});
     
    const isCorrect=await bcrypt.compare(password,response.password)

    if (response && isCorrect) {
        const token = jwt.sign({
            id: response._id.toString()
        }, JWT_SECRET);

        res.json({
            token
        })
    } else {
        res.status(403).json({
            message: "Incorrect creds"
        })
    }
});


app.post("/todo", auth, async function(req, res) {
    const userId = req.userId;
    const title = req.body.title;
    const done = req.body.done;

    await TodoModel.create({
        userId,
        title,
        done
    });

    res.json({
        message: "Todo created"
    })
});


app.get("/todos", auth, async function(req, res) {
    const userId = req.userId;

    const todos = await TodoModel.find({
        userId
    });

    res.json({
        todos
    })
});

app.listen(3000,()=>{
    console.log("Server is running")
});