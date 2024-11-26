import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
// dotenv.config({ path: `${__dirname}/../.env` });

// const MONGODB_URL="mongodb+srv://avinashkumar25:avinashkumar@cluster0.4wonrxg.mongodb.net/Brainly"
const URL=process.env.MONGODB_URL




console.log(URL)

const connectDb=async (): Promise<void> =>{
  await  mongoose.connect("mongodb+srv://avinashkumar25:avinashkumar@cluster0.4wonrxg.mongodb.net/Brainly").then(()=>{
    console.log("Connection Established")
  }).catch((e)=>{
    console.log("COnnection Failed",e)

  })
}

export default connectDb