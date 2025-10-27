// Import database connection utility
import DBconnection from "@/database/dbConnection";
// Import Customers model for database operations
import Customers from "@/database/models/customers";
// Import ICustomer type for type safety
import type { ICustomer } from "@/types/customer";
// Import NextResponse for API responses
import { NextResponse } from "next/server";
// Import Google APIs for Sheets integration
import { google } from "googleapis";

/**
 * GET handler to fetch all customers from the database.
 * @returns JSON response with array of customers
 */
export async function GET(): Promise<NextResponse<ICustomer[]>> {
  // Establish database connection
  await DBconnection();
  // Retrieve all customers from the database
  const customers = await Customers.find();
  // Return customers as JSON with status 200
  return NextResponse.json(customers, { status: 200 });
}

/**
 * POST handler to create a new customer and save their data to Google Sheets.
 * @param request - Incoming request containing customer data
 * @returns JSON response with the created customer
 */
export async function POST(request: Request): Promise<NextResponse<ICustomer>> {
  // Establish database connection
  await DBconnection();

  // Parse customer data from request body
  const data: ICustomer = await request.json();
  // Create new customer in the database
  const newCustomer = await Customers.create(data);

  try {
    // Set up Google Sheets authentication using service account credentials
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
        // Replace escaped newlines in private key
        private_key: process.env.GOOGLE_SHEETS_PRIVATE_KEY?.replace(
          /\\n/g,
          "\n"
        ),
      },
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    // Create Google Sheets API client
    const sheets = google.sheets({ version: "v4", auth });

    // Append new customer data to the specified Google Sheet
    await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEETS_ID,
      range: "Hoja 1!A:E", // Target range in the sheet
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [
          [
            newCustomer.messageId,
            newCustomer.fullName,
            newCustomer.email,
            newCustomer.message,
            newCustomer.createdAt,
          ],
        ],
      },
    });
  } catch (error) {
    // Log error if saving to Google Sheets fails
    console.error("❌ Error al guardar en Google Sheets:", error);
  }

  // Return the newly created customer as JSON with status 201
  return NextResponse.json(newCustomer, { status: 201 });
}
