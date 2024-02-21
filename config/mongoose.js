import mongoose from "mongoose";

// MongoDB connection URI
const mongoURI = "mongodb://localhost:27017/ecomdb";

// Connect to MongoDB
export const dbconnect = async () => {
  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("mongoDb connected");
  } catch (error) {
    console.log("Error while connecting mongoDB : ", err);
  }
};

