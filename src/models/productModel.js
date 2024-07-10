import express from "express";
import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
  id: Number,
  title: String,
  price: Number,
  description: String,
  category: String,
  image:String,
  sold: Boolean,
  dateOfSale: Date,
});

const Product = new mongoose.model("Product", ProductSchema);

export default Product;
