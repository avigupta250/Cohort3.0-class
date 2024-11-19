const express=require('express');
const jwt=require('jsonwebtoken');
const auth=require("./middlewares/auth")

const app=express();
app.use(express.json());


const JWT_SECRET="Avi250"


const PORT=3000;

const users=[];




app.post("/signup",(req,res)=>{
     const {email,password}=req.body;
     console.log(req.body.email)
     
     for(i=0;i<users.length;i++)
     {
        if(users[i].email===email){
          return   res.json({
                message:"User already exist ,try sign in"
            })
        }
     }

     users.push({email:email,password:password});
     console.log(users);

     res.status(200).json({
        message:"User Registered"
     })

})


app.post("/signin",(req,res)=>{
    const {email,password}=req.body;

    for(i=0;i<users.length;i++)
        {
           if(users[i].email==email){

               if(users[i].password==password){

                const token=jwt.sign(email,JWT_SECRET);

                res.json({
                    message:"loggged in",
                    token:token
                })
               }else{
                res.json({
                    message:"Incorrect Password"
                })
               }
              
           }
        }

        res.json({
            message:"User not found",
            
        })

})

app.get("/me",auth,(req,res)=>{
    // const token=req.headers.token;

    // const decodedData=jwt.verify(token,JWT_SECRET);
    // res.json(decodedData);
    res.json({
        message:"You are allowed to visit this route"
    })
})

app.get("/",(req,res)=>{
    res.send("Hiii there")
})

app.listen(PORT,()=>{
    console.log(`Server is up and running on ${PORT}`)
})