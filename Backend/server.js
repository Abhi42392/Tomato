import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import foodRouter from "./routes/foodRouter.js";
import { connectDB } from "./config/db.js";
import userRouter from "./routes/userRouter.js";
import "dotenv/config"
import cartRouter from "./routes/cartRouter.js";
import orderRouter from "./routes/orderRouter.js";
dotenv.config();

const PORT=process.env.PORT

//middle
const app=express();
app.use(cors());
app.use(express.json())
connectDB();

//api end points

app.use("/api/food/",foodRouter);
app.use("/images",express.static("uploads"))
app.use("/api/user",userRouter);
app.use("/api/cart",cartRouter);
app.use("/api/order",orderRouter);

//requests
app.get("/",(req,res)=>{
    res.send("hii")
})

app.listen(PORT,()=>{
    console.log(`Server running on ${PORT}`);
})
