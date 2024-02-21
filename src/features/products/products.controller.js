import { Products } from "./products.modl.js";

export default class ProductController {
  async setAllProducts(req, res) {
    try {
      // Fetch data from the third-party API
      // const response = await fetch(
      //   "https://s3.amazonaws.com/roxiler.com/product_transaction.json"
      // );
      // const jsonData = await response.json();
      

      // // Initialize the database with seed data
      // // await DataModel.insertMany(jsonData);
      // console.log(jsonData);
      const response = await fetch("http://s3.amazonaws.com/roxiler.com/product_transaction.json");
  const movies = await response.json();
  console.log(movies);
      res.status(200).json({ message: "Database initialized successfully" });
    } catch (error) {
      console.error("Error initializing database:", error);
      res.status(500).json({ error: "Failed to initialize database" });
    }
  }
  getAllProducts(request, response) {}
}
