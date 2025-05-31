import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    createdAt: {
      type: Date,
      required: true,
    },
    // slug: {
    //   type: String,
    //   required: true,
    //   unique: true,
    // },
    totalPrice: {
      type: Number,
      required: true,
    },
    Product: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
    },
  },
  {
    timestamps: true,
  }
);

//export default mongoose.model("Order", orderSchema);
export default mongoose.model("Order", orderSchema, "Products");
