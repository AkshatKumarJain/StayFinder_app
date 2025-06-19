import { verifyToken } from "../middlewares/auth.middleware.js";
import { booking, cancelBooking } from "../controllers/booking.controller.js";

import express from "express";

const router = express.Router();

router.post("/bookplace", verifyToken, booking);
router.delete("/cancel", verifyToken, cancelBooking);

export default router;