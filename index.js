import express from "express"
import productRoutes from "./src/features/products/products.router.js"
import { dbconnect } from "./config/mongoose.js";
//define port
const port=4100;
// Create Server
const app = express();
//  routes moddleware
app.use("/api/products",productRoutes);
// app.get('/',(req,res)=>{
//     return res.send("response")
// })
// Specify port
app.listen(port,(err)=>{
    if(err){
        console.log("Server Error",err)
    }
    console.log(`server is up on port ${port}`)
    // dbconnect();
});