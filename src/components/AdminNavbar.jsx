'use client';

import React from 'react';
import Link from 'next/link';
import { useAuth } from './auth/AuthContext';
import { HiLogout } from 'react-icons/hi';

const AdminNavbar = () => {
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
  };

  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" legacyBehavior>
          <a className="text-xl font-bold">Admin Portal</a>
        </Link>
        <div className="flex items-center space-x-4">
          <Link href="/devmode" legacyBehavior>
            <a className="hover:text-gray-300">Developer Mode</a>
          </Link>
          <span>{user.email}</span>
          <button
            onClick={handleLogout}
            className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition-colors duration-200 flex items-center"
          >
            <HiLogout className="mr-2" />
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
};

export default AdminNavbar;
