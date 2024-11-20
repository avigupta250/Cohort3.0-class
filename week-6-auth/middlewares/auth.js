const jwt=require('jsonwebtoken');
// const JWT_SECRET=process.env.JWT_SECRET;


const JWT_SECRET="Avi250"

const auth=(req,res,next)=>{
    const token=req.headers.token;
    const {email}=req.body;
    console.log(email)
    

    const decodedData=jwt.verify(token,JWT_SECRET);
    console.log(decodedData);

    if(email==decodedData){
        req.email=decodedData;
        next();
    }
    else{
        res.json({
            message:"invalid user"
        })
    }

    res.json({
        message:"invalid token"
    })

}


module.exports=auth