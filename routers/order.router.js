import express from "express";
import {
  createOrder,
  deleteOrder,
  getOrder,
  getOrders,
  //   updateProduct,
} from "../modules/order/order.controller.js";

const router = express.Router();

router.get("/", getOrders);

router.get("/:id", getOrder);

//The slug is for findone method not for id where it will work
//router.get("/:slug", getProduct);

router.post("/", createOrder);

// router.put("/:id", updateProduct);

router.delete("/:id", deleteOrder);

export default router;
