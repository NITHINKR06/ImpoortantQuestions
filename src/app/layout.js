import "./globals.css";
import { AuthProvider } from "@/components/auth/AuthContext";

import NavWrapper from '../components/NavWrapper';

export const metadata = {
  title: 'IQues',
  description: 'Important Questions ... ',
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
