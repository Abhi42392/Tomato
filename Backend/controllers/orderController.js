import orderModel from "../models/orderModel.js"
import user from "../models/user.js"
const placeOrder=async(req,res)=>{
    const{items,amount,address,status,date,userId}=req.body;
    try{
        const order=new orderModel({
            userId,
            items,
            amount,
            address,
            status,
            date    
        });
        await order.save();
        await user.findByIdAndUpdate(userId,{cartData:{}})
        res.json({success:true,message:order})
    }catch(err){
        res.json({success:false,message:"Something went wrong"})
    }
}

const getOrders=async(req,res)=>{
    const{userId}=req.body;
    
    try{
        const response=await orderModel.find({userId});
        res.json({success:true,message:response})
        
    }catch(err){
        res.json({success:true,message:"Can't retrieve orders"})
    }
}

export {placeOrder,getOrders};