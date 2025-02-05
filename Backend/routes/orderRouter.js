import express from "express";
import {placeOrder,getOrders } from "../controllers/orderController.js";
import authMiddleWare from "../middleware/auth.js";

const orderRouter=express.Router();

orderRouter.post("/place",authMiddleWare,placeOrder)
orderRouter.post("/list",authMiddleWare,getOrders)


export default orderRouter;