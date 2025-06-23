import express from "express";
import { verifyToken } from "../middlewares/auth.middleware.js";
import { checkout_session } from "../controllers/payment.controller.js";

const router = express.Router();

router.post("/payment",verifyToken, checkout_session);

export default router;

