import express from "express";

const router=express.Router();

router.get('/', getTransactions);
router.get('/statistics', getStatistics);
router.get('/bar-chart', getBarChart);
router.get('/pie-chart', getPieChart);
router.get('/combined', getCombinedData);

export default router;