import express from "express";
import { createUser } from "../controllers/registerUser.controller.js";
import { login } from "../controllers/loginUser.controller.js";
import { verifyToken } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.post("/createUser", createUser);
router.post("/login", login);

export default router;