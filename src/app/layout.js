import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
// import Head from "next/head";
// import ProtectedPage from "./ProtectedPage";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Cyber Security",
  description: "You may get all important question and answers here",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* <ProtectedPage> */}
          <Navbar />
          {children}
        {/* </ProtectedPage> */}
      </body>
    </html>
  );
}
