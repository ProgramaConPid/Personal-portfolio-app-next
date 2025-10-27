// Import mongoose Schema, model, and models for MongoDB operations
import { Schema, model, models } from "mongoose";

/**
 * Mongoose schema for customer documents
 * Defines the structure and types for each customer field
 * Uses the 'customers' collection in MongoDB
 */
const CustomersModel = new Schema(
  {
    messageId: Number, // Unique message/customer ID
    fullName: String, // Customer's full name
    email: String, // Customer's email address
    message: String, // Message content
    createdAt: String, // Timestamp of creation
  },
  {
    collection: "customers",
  }
);

// Create or retrieve the Customers model to avoid recompilation errors in Next.js
const Customers = models.Customers || model("Customers", CustomersModel);

// Export the Customers model for use in API routes and services
export default Customers;
