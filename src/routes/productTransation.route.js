import express from "express";
import { getBarChartData, getCombinedData, getPieChartData, getStatistics, getTransactionsMonthly } from "../controllers/product.controller.js";

const router=express.Router();

router.get('/', getTransactionsMonthly);
router.get('/statistics/:month', getStatistics);
router.get('/bar-chart/:month', getBarChartData);
router.get('/pie-chart/:month', getPieChartData);
router.get('/combined', getCombinedData);

export default router;