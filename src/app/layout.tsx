import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar/Navbar";
import Footer from "@/components/layout/Footer/Footer";
import { ToastContainer } from "react-toastify";

export const metadata: Metadata = {
  title: "Pidfolio",
  description: "Desarrollador Full Stack | Portfolio personal creado con Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased min-h-screen flex flex-col justify-between `}
      >
        <Navbar />
        <main className="grow flex items-center justify-center">
          {children}
        </main>
        <Footer />
        <ToastContainer />
      </body>
    </html>
  );
}
