import express from "express";
import { getAllData } from "../controllers/seedData.controller.js";

const router=express.Router();

router.get("/",getAllData);

export default router;