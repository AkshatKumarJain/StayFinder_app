import { verifyToken } from "../middlewares/auth.middleware.js";
import { booking } from "../controllers/booking.controller.js";

import express from "express";

const router = express.Router();

router.post("/bookplace", verifyToken, booking);

export default router;