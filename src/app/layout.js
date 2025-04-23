import "./globals.css";
import { AuthProvider } from "@/components/auth/AuthContext";

import NavWrapper from '../components/NavWrapper';

export const metadata = {
  title: 'IQues',
  description: 'Important Questions ... for your exams',
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
