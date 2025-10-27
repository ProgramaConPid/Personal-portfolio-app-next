// Import Google APIs for Sheets integration
import { google } from "googleapis";

/**
 * GET handler to append a test row to a Google Sheet using the Sheets API.
 * Authenticates with service account credentials and writes a test row.
 * Returns a JSON response indicating success or failure.
 */
export async function GET() {
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

    // Append a test row to the specified Google Sheet
    await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEETS_ID,
      range: "Hoja 1!A:E", // Target range in the sheet
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [
          ["✅ Test desde API", new Date().toLocaleString(), "Funciona"],
        ],
      },
    });

    // Return success response
    return Response.json({
      ok: true,
      message: "Fila añadida correctamente 🚀",
    });
  } catch (error) {
    // Log error and return failure response
    console.error("Error al escribir en Google Sheets:", error);
    return Response.json({ ok: false, error: String(error) }, { status: 500 });
  }
}
