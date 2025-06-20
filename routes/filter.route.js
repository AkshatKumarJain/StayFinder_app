import { User } from "../models/user.model.js";
import { Listing } from "../models/listings.model.js";
import { Booking } from "../models/booking.model.js";
import express from "express";
import { verifyToken } from "../middlewares/auth.middleware.js";
import { filterByCity } from "../controllers/filters.controller.js";

const router = express.Router();

router.get("/location", verifyToken, filterByCity);

export default router;