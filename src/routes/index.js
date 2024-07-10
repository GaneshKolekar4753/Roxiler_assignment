import express from "express";
import seedDataroute from "./initData.route.js";
import productroute from "./productTransation.route.js"

const router=express.Router();

router.use("/seed",seedDataroute) //route to import data in db
router.use("/product",productroute) //route to perform opertion products data 

export default router;