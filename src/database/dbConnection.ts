dotenv.config();
// Import mongoose for MongoDB connection
import mongoose from "mongoose";
// Import dotenv to load environment variables from .env file
import dotenv from "dotenv";
// Load environment variables
dotenv.config();

/**
 * Establishes a connection to MongoDB using mongoose.
 * Reads the connection URI from environment variables.
 * Logs success or exits the process on failure.
 */
const DBconnection = async () => {
  try {
    // Attempt to connect to MongoDB using the URI from .env
    await mongoose.connect(process.env.MONGODB_URI!);
    console.log("Connection with mongoDB successfully");
  } catch (e) {
    // Log error and exit process if connection fails
    console.error(e);
    process.exit(1);
  }
};

// Export the DBconnection function for use in API routes and services
export default DBconnection;
