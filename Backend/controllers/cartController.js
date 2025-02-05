
import userModel from '../models/user.js'


const addToCart=async(req,res)=>{
    
    try{
        let userData=await userModel.findOne({_id:req.body.userId});
        
        let cartData=userData.cartData;
        if(!cartData[req.body.itemId]){
            cartData[req.body.itemId]=1;
        }else{
            cartData[req.body.itemId]+=1;
        }
        await userModel.findByIdAndUpdate(req.body.userId,{cartData})
        res.json({success:true,message:"Item added to cart"})
    }catch(err){
        res.json({success:false,message:"Can't add item to cart"})
    }
}

const removeFromCart=async(req,res)=>{
    try{
        let userData=await userModel.findOne({_id:req.body.userId});
        let cartData=userData.cartData;
        console.log(cartData);
        cartData[req.body.itemId]-=1;
        await userModel.findByIdAndUpdate(req.body.userId,{cartData})
        res.json({success:true,message:"Item removed from cart"})
    }catch(err){
        res.json({success:false,message:"Can't remove item from cart"})
    }
}

const listCart=async(req,res)=>{
    try{
        let userData=await userModel.findOne({_id:req.body.userId});
        let cartData=userData.cartData;
        res.json({success:true,message:cartData})
    }catch(err){
        res.json({success:false,message:"couldn't fetch data"})
    }
}

export {addToCart,listCart,removeFromCart};