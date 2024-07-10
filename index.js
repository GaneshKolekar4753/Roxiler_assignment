import express from "express";
import env from "dotenv";
import dbConnect from "./config/mongoose.js";
import router from "./src/routes/index.js";

const app=express();
env.config();
const port =process.env.PORT;
app.use(express.json());
app.use(express.urlencoded());


app.use("/api",router);
app.get("/",(req,res)=>{
    res.send("welcome in server. to use api go to /api/...")
});

app.listen(port||7000,(err)=>{
    if(err){
        console.log("servere is not up:",err);
    }
    console.log(`server is up on port: ${port}`);
    dbConnect()
});