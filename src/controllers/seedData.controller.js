import Product from "../models/productModel.js";

//fetch the JSON from the third party API and initialize the database with seed data.
export const getAllData = async (req, res) => {
  try {
    const response = await fetch("https://s3.amazonaws.com/roxiler.com/product_transaction.json", {
      method: "GET",
    });
    const data = await response.json();
    await Product.deleteMany();
    await Product.insertMany(data);
    
    res.status(200).json({ status:"Ok",msg: "DB seeded successfully" });
  } catch (error) {
    res.status(500).json({ msg: "internal server error", err: error.message });
  }
};
