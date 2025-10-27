import { google } from "googleapis";

export async function GET() {
  try {
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_SHEETS_PRIVATE_KEY?.replace(/\\n/g, "\n"),
      },
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const sheets = google.sheets({ version: "v4", auth });

    await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEETS_ID,
      range: "Hoja 1!A:E", // o el nombre de tu hoja
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [["✅ Test desde API", new Date().toLocaleString(), "Funciona"]],
      },
    });

    return Response.json({ ok: true, message: "Fila añadida correctamente 🚀" });
  } catch (error) {
    console.error("Error al escribir en Google Sheets:", error);
    return Response.json({ ok: false, error: String(error) }, { status: 500 });
  }
}
