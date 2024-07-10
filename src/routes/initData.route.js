import express from "express";

const router=express.Router();

router.get("/",getAllData);

export default router;