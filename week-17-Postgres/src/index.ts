import { Client } from "pg";
import express from "express"



const pgClient= new Client("postgresql://neondb_owner:small-butterfly-a5yd2pc4.us-east-2.aws.neon.tech/neondb?sslmode=require");
const app=express();
app.use(express.json())
const pgClient2=new Client({
   

})
pgClient.connect()

async function main(){
 
    const response=await pgClient.query("select * from users;")
    console.log(response.rows)
}

main();


app.post("/signup",async(req,res)=>{
 try{
    const  username=req.body.username;
    const  email=req.body.email;
    const  password=req.body.password;
    
  
      const response=await pgClient.query(`INSERT INTO users (username,email,password) VALUES ('${username}','${email}','${password}');`)
      console.log(response)
      res.json({
          message:"User created"
      })
 }catch(err){
// 
 }
})

app.get("/users",async(req,res)=>{
    const response=await pgClient.query("select * from users;")
    console.log(response.rows)
    res.json({
        user:response.rows
    })
})
app.get("/",(req,res)=>{
    
    res.send("running")
})
app.listen(3000)