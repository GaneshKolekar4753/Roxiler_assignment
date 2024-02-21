
import mongoose from "mongoose";
import { ProductSchema } from "./products.schema.js";
export const  Products=mongoose.model("Products",ProductSchema);
