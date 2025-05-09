'use client';

import React, { createContext, useContext, useState } from 'react';
import authorizedUsers from '../../config/authorizedUsers'; // Adjust the path as necessary

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  const login = async (username) => {
    if (!username) {
      throw new Error('Username is required');
    }

    if (!authorizedUsers.includes(username)) {
      throw new Error('No access');
    }

    if (currentUser && currentUser === username) {
      throw new Error('User already logged in on another device');
    }

    setCurrentUser(username);
  };

  const logout = () => {
    setCurrentUser(null);
  };

  return (
    <AuthContext.Provider value={{ currentUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
