import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "@/components/auth/AuthContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

import Navbar from '../components/Navbar';
import AdminNavbar from '../components/AdminNavbar';
import NavWrapper from '../components/NavWrapper';

export const metadata = {
  title: 'IQues',
  description: 'Important Questions',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <NavWrapper />
          {children}
        </AuthProvider>
      </body>
    </html>
  )
}
