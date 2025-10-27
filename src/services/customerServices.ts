// Import axios for making HTTP requests
import axios from "axios";
// Import the ICustomer type for type safety
import type { ICustomer } from "@/types/customer";

// Base URL for API requests, uses environment variable or defaults to localhost
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

/**
 * Fetches the list of customers from the API.
 * @returns Array of ICustomer objects
 * @throws Error if the request fails
 */
export async function getCustomers(): Promise<ICustomer[]> {
  // Make a GET request to fetch customers
  const res = await axios.get(`${BASE_URL}/api/customers`);
  if (res.status === 200) {
    // Return customer data if request is successful
    return res.data;
  }
  // Throw error if request fails
  throw new Error("Failed to load customers");
}

/**
 * Creates a new customer by sending a POST request to the API.
 * @param customer - The customer data to create
 * @returns The created ICustomer object
 * @throws Error if the request fails
 */
export async function createCustomer(customer: ICustomer): Promise<ICustomer> {
  // Make a POST request to create a new customer
  const res = await axios.post(`${BASE_URL}/api/customers`, customer);
  if (res.status === 201) {
    // Log success message and return created customer data
    console.log("✅ Customer created:", res.data);
    return res.data;
  }
  // Throw error if request fails
  throw new Error("Failed to create customer");
}
