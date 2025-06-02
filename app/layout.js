import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "My Portfolio",
  description: "Portfolio - Shubham Bansal",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="page-wrapper" >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
