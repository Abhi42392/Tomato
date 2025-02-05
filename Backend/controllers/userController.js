import userModel from "../models/user.js"
import jwt from "jsonwebtoken"
import validator from "validator"
import bcrypt from "bcrypt"

export const login=async(req,res)=>{
    const{email,password}=req.body;
    try{
        const user=await userModel.findOne({email});
        if(!user){
            return res.json({success:false,message:"User does not exists"});
        }
        const userPassword=user.password;
        const isMatch=await bcrypt.compare(password,userPassword);
        if(!isMatch){
            return res.json({success:false,message:"Password does not match"});
        }
        const token=createToken(user._id);
        res.json({success:true,token});
    }catch(err){
        console.log(err);
        res.json({success:false,message:"Something went wrong"});
    }
    
}

const createToken=(id)=>{
    return jwt.sign({id},process.env.JWT_SECRET)
}

export const register=async(req,res)=>{
    try{
        const{name,email,password}=req.body;
        
        const exists=await userModel.findOne({email});
        if(exists){
            return res.json({success:false,message:"User already exists"});
        }

        if(!validator.isEmail(email)){
            return res.json({success:false,message:"Enter valid email address"});
        }

        if(password.length<8){
            return res.json({success:false,message:"Password should contain atleast 8 characters"});
        }

        const salt=await bcrypt.genSalt(10);
        const hashedPassword=await bcrypt.hash(password,salt);
        
        const newUser=new userModel({
            name:name,
            password:hashedPassword,
            email:email
        });
        
        const user=await newUser.save();
        const token=createToken(user._id);
        res.json({success:true,token});
    }catch(err){
        console.log(err);
        res.json({success:false,message:"Something went wrong"});
    }
    

}