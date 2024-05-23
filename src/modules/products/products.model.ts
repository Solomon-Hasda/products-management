import mongoose, { model } from "mongoose";
import { Inventory, TProducts, Variant } from "./products.interface";
const { Schema } = mongoose;

const variantsSchema = new Schema<Variant>({
  type: {
    type: String,
    required: [true, "Variant type is required"],
  },
  value: {
    type: String,
    required: [true, "Variant value is required"],
  },
}, { _id: false });

const inventorySchema = new Schema<Inventory>({
  quantity: {
    type: Number,
    required: [true, "you must provide quantity of products"],
  },
  inStock: {
    type: Boolean,
    required: [true, "Inventory value is required"],
  },
}, { _id: false });

const productsSchema = new Schema<TProducts>({
  name: {
    type: String,
    required: [true, "Product name is required"],
  },
  description: {
    type: String,
    required: [true, "Product description is required"],
  },
  price: {
    type: Number,
    required: [true, "Product price is required"],
    min: [0, "you must provide a positive number"],
  },
  category: {
    type: String,
    required: [true, "Product category is required"],
  },
  tags: {
    type: [String],
    required: [true, "Product tags are required"],
  },
  variants: {
    type: [variantsSchema],
    required: [true, "Product variants are required"],
  },
  inventory: {
    type: [inventorySchema],
    required: [true, "Product inventory is required"],
  },
});

export const Products = model<TProducts>("Products", productsSchema)


