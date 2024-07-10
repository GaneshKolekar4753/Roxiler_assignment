
import mongoose from "mongoose";

const dbConnect= async ()=>{
    try {
        await mongoose.connect(`${process.env.MONGOURI}/rx_db`);
        console.log("mongoDB is connected successfully: rx_db");
    } catch (error) {
        console.log("error in connecting db",error);
    }
}

export default dbConnect;