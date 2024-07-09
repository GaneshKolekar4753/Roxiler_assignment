import express from "express";
import env from "dotenv";


const app=express();
env.config();

app.use(express.json());
app.use(express.urlencoded());

app.get((req,res)=>{
    res.send("welcome in server")
});

app.listen(process.env.PORT||7000,(err)=>{
    if(err){
        console.log("servere is not up:",err);
    }
    console.log(`server is up on port: ${process.env.PORT}`);
})