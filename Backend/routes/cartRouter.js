import { addToCart,removeFromCart,listCart } from "../controllers/cartController.js";
import express from 'express'
import authMiddleWare from "../middleware/auth.js";
const cartRouter=express.Router();

cartRouter.post("/add",authMiddleWare,addToCart);
cartRouter.post("/remove",authMiddleWare,removeFromCart);
cartRouter.post("/list",authMiddleWare,listCart);

export default cartRouter;