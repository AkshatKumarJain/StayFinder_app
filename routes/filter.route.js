import { User } from "../models/user.model.js";
import { Listing } from "../models/listings.model.js";
import { Booking } from "../models/booking.model.js";
import express from "express";
import { verifyToken } from "../middlewares/auth.middleware.js";
import { filterByCity, filterByBuilding, filterByState, filterByCountry, filterByPrice } from "../controllers/filters.controller.js";

const router = express.Router();

// On the basis of location
router.get("/locationByCity", verifyToken, filterByCity);
router.get("/locationByBuilding", verifyToken, filterByBuilding);
router.get("/locationByState", verifyToken, filterByState);
router.get("/locationByCountry", verifyToken, filterByCountry);

// on the basis of price
router.get("/listingByPrice", verifyToken, filterByPrice);

export default router;