import express from "express";
//import authRouter from "./routers/auth.router.js";
import productRouter from "./routers/product.router.js";
import { startDatabase } from "./config/db.js";

const app = express();

app.use(express.json());

//app.use("/auth", authRouter);
app.use("/products", productRouter);

app.listen(5001, async () => {
  await startDatabase();
  console.log("Server is running");
});
