import express from "express";
import { getAllusers } from "../modules/users/users.controller.js";

const router = express.Router();

// router.get("/", getProducts);

router.get("/", getAllusers);

export default router;
