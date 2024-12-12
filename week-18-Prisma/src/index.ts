import { PrismaClient } from "@prisma/client";
import  express  from "express";
import {z} from "zod"

const app=express();

app.use(express.json())
const PORT=3000;

const Client=new PrismaClient();



const reqBody=z.object({
    username:z.string().min(5).max(10),
    password:z.string().min(5)
    .refine((password)=>/[A-Z]/.test(password),{message:"Required atleast one uppercase"})
    .refine((password)=>/[a-z]/.test(password),{message:"Required atleast one lowercase"})
    .refine((password)=>/[0-9]/.test(password),{message:"Required atleast one number"})
    .refine((password)=>/[@!#$%&]/.test(password),{message:"Required atleast one special character"}),
    age:z.number(),
    city:z.string(),
    title:z.string(),
    description:z.string()
})


app.post("/signup",async(req,res)=>{

    const parseData=reqBody.safeParse(req.body)


    if(!parseData.success){
        res.json({
            message:parseData.error.issues[0].message
        })
        return 

    }
    const {username,password,age,city}=req.body
    const response=await Client.user.create({
        data:{
            username,
            password,
              age,
            city,
        }
    })

    res.json({
        success:true,
        message:"User Created Succesfully",
        data:response
    })
})


app.post("todo",async(req,res)=>{

    const parseData=reqBody.safeParse(req.body)


    if(!parseData.success){
        res.json({
            message:parseData.error.issues[0].message
        })
        return 

    }
    const {title,description,done,userId}=req.body;


    const response=await Client.todo.create({
        data:{
            title,
            description,
            done,
            userId
        }
    })

    res.json({
        success:true,
        message:"Todo created",
        data:response
    })
})


app.get("/user:id",async(req,res)=>{

    const userId=req.params.id;

    const response=await Client.user.findFirst({
      where:{
        id: parseInt(userId)
      },
      select:{
        todos:true
        
      }
    });

    res.json({
        response
    })
})













app.get("/",(req,res)=>{
    res.send("Hello form server")
})


app.listen(PORT,()=>{
    console.log(`App is listening on ${PORT}`)
})