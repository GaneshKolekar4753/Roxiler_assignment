import express from "express"
import ProductController from "./products.controller.js";

const router=express.Router();
const productController=new ProductController();

router.get('/initilize',productController.setAllProducts);

export default router;

