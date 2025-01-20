import express from "express";
import jwt from "jsonwebtoken";
import { middleware } from "./middlewares";

import { JWT_SECRET } from "@repo/backend-common/config";
import {
  CreateUserSchema,
  SigninSchema,
  CreateRoomSchema,
} from "@repo/common/types";
import { prismaClient } from "@repo/db/client";
const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hii there");
});

app.post("/signup", async (req, res) => {
  const parsedData = CreateUserSchema.safeParse(req.body);
  if (!parsedData.success) {
    res.json({
      messgae: "Incorrect Input",
    });

    return;
  }
  try {
    const { username, password, name } = req.body;
    // hash password TODO
    const user = await prismaClient.user.create({
      data: {
        username: username,
        password: password,
        name: name,
      },
    });

    res.json({
      message: "User Created",
      data: user,
    });
  } catch (err) {
    res.status(411).json({
      message: "User already exist",
    });
  }
});

app.post("/signin", async(req, res) => {
  const data = SigninSchema.safeParse(req.body);
  if (!data.success) {
    res.json({
      messgae: "Incorrect Input",
    });

    return;
  }
  try{
    const {username,password}=req.body;

    const user=await prismaClient.user.findFirst({
      where:{
        username:username,
        password:password
      }
    })
    if(!user){
      res.status(403).json({
        message:"User does not exist"
      })
      return 
    }
    const token = jwt.sign(
      {
        userId:user.id
      },
      JWT_SECRET
    );
  
    res.json({
      token,
      user
    });
  }catch(err){
    res.status(401).json({
      error:err
    })
  }
 
});

app.post("/room", middleware, async(req, res) => {
  const parseData = CreateRoomSchema.safeParse(req.body);
  if (!parseData.success) {
    res.json({
      messgae: "Incorrect Input",
    });

    return;
  }
// @ts-ignore
  const userId=req.userId;

 const room= await prismaClient.room.create({
    data:{
      slug:parseData.data.name,
      adminId:userId,
    }
  })
  res.json({
   room
  });
});



app.get("/chats/:roomId",async(req,res)=>{
  try{
    const roomId=Number(req.params.roomId);
  const messages=await prismaClient.chat.findMany({
    where:{
      roomId:roomId
    },
    orderBy:{
      id:'desc',
    
    },
    take:50
  })
  res.json({
    messages:messages
  })
  }catch(err){
    res.status(401).json({
      error:err
    })
  }
})

app.get("/room/:slug",async(req,res)=>{
  const slug=(req.params.slug);
  const room=await prismaClient.room.findFirst({
    where:{
      slug
    },
   
  })
  console.log(room);
  res.json({
    room
  })
})
app.listen(5000);
