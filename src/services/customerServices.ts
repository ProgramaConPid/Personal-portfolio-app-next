import axios from "axios";
import type { ICustomer } from "@/types/customer";

const BASE_URL =
  process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

export async function getCustomers(): Promise<ICustomer[]> {
  const res = await axios.get(`${BASE_URL}/api/customers`);
  if (res.status === 200) {
    return res.data;
  }
  throw new Error("Failed to load customers");
}

export async function createCustomer(customer: ICustomer): Promise<ICustomer> {
  const res = await axios.post(`${BASE_URL}/api/customers`, customer);
  if (res.status === 201) {
    console.log("✅ Customer created:", res.data);
    return res.data;
  }
  throw new Error("Failed to create customer");
}
