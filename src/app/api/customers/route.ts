import DBconnection from "@/database/dbConnection";
import Customers from "@/database/models/customers";
import type { ICustomer } from "@/types/customer";
import { NextResponse } from "next/server";
import { google } from "googleapis";

export async function GET(): Promise<NextResponse<ICustomer[]>> {
  await DBconnection();
  const customers = await Customers.find();
  return NextResponse.json(customers, { status: 200 });
}

export async function POST(request: Request): Promise<NextResponse<ICustomer>> {
  await DBconnection();

  const data: ICustomer = await request.json();
  const newCustomer = await Customers.create(data);

  try {
    // --- Autenticación con Google Sheets ---
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_SHEETS_PRIVATE_KEY?.replace(/\\n/g, "\n"),
      },
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const sheets = google.sheets({ version: "v4", auth });

    // --- Agregar fila a la hoja ---
    await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEETS_ID,
      range: "Hoja 1!A:E", // A-E porque hay 5 columnas
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [[
          newCustomer.messageId,
          newCustomer.fullName,
          newCustomer.email,
          newCustomer.message,
          newCustomer.createdAt,
        ]],
      },
    });
  } catch (error) {
    console.error("❌ Error al guardar en Google Sheets:", error);
    // No detenemos la creación en Mongo si Sheets falla
  }

  return NextResponse.json(newCustomer, { status: 201 });
}
