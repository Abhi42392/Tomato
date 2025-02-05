import jwt from "jsonwebtoken"

const authMiddleWare= async (req,res,next)=>{
    const token=req.headers.token;
    
    if(!token){
        return res.json({success:false,message:"user does not authorised"});
    }
    try{
        const token_decode=jwt.verify(token,process.env.JWT_SECRET);
        req.body.userId=token_decode.id;
        next();
    }catch(err){
        console.log(err);
        res.json({success:false,message:"Something went wrong"});
    }
    

}

export default authMiddleWare;