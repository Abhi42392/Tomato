import { addFood, listFood, remveFood } from "../controllers/foodController.js";
import express from "express";
import upload from "../middleware/multer.js";
const foodRouter=express.Router();

foodRouter.get("/list",listFood);
foodRouter.post("/add",upload.single("image"),addFood);
foodRouter.post("/remove",remveFood);


export default foodRouter;