
import foodModel from "../models/foodModel.js"
import fs from "fs";
import path from "path"

const addFood=async(req,res)=>{
    try{
        const foodItem=new foodModel({
            name:req.body.name,
            description:req.body.description,
            price:req.body.price,
            category:req.body.category,
            image:req.file.filename
        })
        await foodItem.save();
        res.json({success:true,message:"food added successfully"});
    }catch(err){
        res.json({success:false,message:err})
    }
}

const remveFood=async(req,res)=>{
    try{
        const food=await foodModel.findByIdAndDelete(req.body.id);
        const filePath = path.resolve(`uploads/${food.image}`);
        fs.unlink(filePath, (err) => {
            if (err) {
                console.error("Error deleting file:", err.message);
                
                return res.json({ success: false, message: "Food deleted, but file could not be deleted", error: err.message });
            }

            console.log("File deleted successfully:", filePath);
            res.json({ success: true, message: "Food deleted successfully" });
        });
    }catch(err){
        res.json({success:false,message:"Cant delete"})
    }
}

const listFood=async (req,res)=>{
    try{
        const allFoodItems=await foodModel.find({});
        res.json({success:true,message:allFoodItems});
    }catch(err){
        res.json({success:false})
    }
}
export {listFood,remveFood,addFood}