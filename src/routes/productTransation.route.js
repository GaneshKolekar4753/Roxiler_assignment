import express from "express";
import { getBarChartData, getCombinedData, getPieChartData, getStatistics, getTransactionsMonthly } from "../controllers/product.controller.js";

const router=express.Router();

router.get('/', getTransactionsMonthly);
router.get('/statistics', getStatistics);
router.get('/bar-chart', getBarChartData);
router.get('/pie-chart', getPieChartData);
router.get('/combined', getCombinedData);

export default router;