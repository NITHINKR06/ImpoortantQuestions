import "./globals.css";
import { AuthProvider } from "@/components/auth/AuthContext";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

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
        <ToastContainer
          position="top-center"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </body>
    </html>
  )
}
