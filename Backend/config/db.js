import mongoose from "mongoose";

export const connectDB=async ()=>{
    await mongoose.connect("mongodb+srv://abhinavbasa427:NC119GWE4X2w7Xhh@cluster0.heeuw.mongodb.net/Tomato").then(console.log("DB connected"));
}

