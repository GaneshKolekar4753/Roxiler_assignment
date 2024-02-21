import mongoose from "mongoose";

 export const ProductSchema=new mongoose.Schema({
    title:{type:String},
    price:{type:Number},
    description:{
        type:String
    },
    category:{
        type:String,enum:["jewelery","men's clothing","electronics","women's clothing"]
    },
    image:{
        type:String
    },
    sold:{
        type:Boolean
    },
    dateOfSale:{
        type:Date
    }
});