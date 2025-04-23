'use client';

import React from 'react';
import { useAuth } from './auth/AuthContext';
import Navbar from './Navbar';
import AdminNavbar from './AdminNavbar';

export default function NavWrapper() {
  const { user } = useAuth();

  return user && user.isDevMode ? <AdminNavbar /> : <Navbar />;
}
