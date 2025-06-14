import express from "express";
import { createUser } from "../controllers/registerUser.controller.js";

const router = express.Router();

router.post("/createUser", createUser);

export default router;