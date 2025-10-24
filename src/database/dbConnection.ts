import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const DBconnection = async() => {
  try {
    await mongoose.connect(process.env.MONGODB_URI!);
    console.log("Connection with mongoDB successfully");
  } catch(e) {
    console.error(e);
    process.exit(1);
  }
}

export default DBconnection;