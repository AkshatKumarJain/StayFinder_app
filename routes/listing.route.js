import { verifyToken } from "../middlewares/auth.middleware.js";
import { User } from "../models/user.model.js";
import { Listing } from "../models/listings.model.js";
import { getList, getListById, postPlace, getListingsById } from "../controllers/list.controller.js";
import express from "express";
// import { authorizesRoles } from "../middlewares/role.middleware.js";
import { authorizeRoles } from "../middlewares/role.middleware.js";

const router = express.Router();

router.post("/postPlace", verifyToken, authorizeRoles("Host"), postPlace);
router.get("/getPlace/:id", verifyToken, authorizeRoles("Host"), getListingsById)

router.get("/listings", getList);
router.get("/listings/:id", getListById);

export default router;