import express from "express";
import {
  createOrder,
  deleteOrder,
  getOrder,
  getOrders,
  updateOrder,
} from "../modules/order/order.controller.js";
import { AuthGuard, RoleGuard } from "../modules/auth/auth.middleware.js";

const router = express.Router();

router.get("/", AuthGuard, getOrders);

router.get("/:id", AuthGuard, getOrder);

//The slug is for findone method not for id where it will work
//router.get("/:slug", getProduct);

router.post("/", AuthGuard, createOrder);

router.put("/:id", updateOrder);

router.delete("/:id", deleteOrder);

export default router;
