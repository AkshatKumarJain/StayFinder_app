import { verifyToken } from "../middlewares/auth.middleware.js";
import { User } from "../models/user.model.js";
import { Listing } from "../models/listings.model.js";
import { getList, getListById } from "../controllers/list.controller.js";
import express from "express";

const router = express.Router();

router.get("/listings", getList);
router.get("/listings/:id", getListById);

export default router;