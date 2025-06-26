import express from "express";
import { getMetrics } from "../controllers/metric.controller.js";

import { authenticateToken } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.get("/", authenticateToken, getMetrics);

export { router as metricRouter };
