import { Schema, model, models } from "mongoose";

const CustomersModel = new Schema({
  messageId: Number,
  fullName: String,
  email: String,
  message: String,
  createdAt: String
}, {
  collection: "customers"
})

const Customers = models.Customers || model("Customers", CustomersModel);

export default Customers;