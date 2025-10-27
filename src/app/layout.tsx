// Import Next.js Metadata type for page metadata
import type { Metadata } from "next";
// Import global styles
import "./globals.css";
// Import Navbar and Footer layout components
import Navbar from "@/components/layout/Navbar/Navbar";
import Footer from "@/components/layout/Footer/Footer";
// Import ToastContainer for notifications
import { ToastContainer } from "react-toastify";

// Metadata for the entire app (title and description)
export const metadata: Metadata = {
  title: "Pidfolio",
  description:
    "Desarrollador Full Stack | Portfolio personal creado con Next.js",
};

// Root layout component for the entire app
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // HTML structure for the app
    <html lang="en">
      <body
        className={`antialiased min-h-screen flex flex-col justify-between `}
      >
        {/* Navbar at the top */}
        <Navbar />
        {/* Main content area, grows to fill space */}
        <main className="grow flex items-center justify-center">
          {children}
        </main>
        {/* Footer at the bottom */}
        <Footer />
        {/* Toast notifications container */}
        <ToastContainer />
      </body>
    </html>
  );
}
