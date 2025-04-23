'use client';

import React, { createContext, useContext, useState } from 'react';
import Cookies from 'js-cookie';
import { v4 as uuidv4 } from 'uuid';
import authorizedUsers from '../../config/authorizedUsers';

const AuthContext = createContext({});

export const useAuth = () => useContext(AuthContext);

// Map to track user sessions: email -> deviceId
const deviceSessions = {};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  const login = async (email) => {
    setLoading(true);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Check if user is authorized
        if (!authorizedUsers.includes(email)) {
          setLoading(false);
          reject(new Error('No access'));
          return;
        }

        // Check if user already logged in on another device
        const existingDeviceId = deviceSessions[email];
        const currentDeviceId = Cookies.get('deviceId');

        if (existingDeviceId && existingDeviceId !== currentDeviceId) {
          setLoading(false);
          reject(new Error('User already logged in on another device'));
          return;
        }

        // If no deviceId cookie, generate and set one
        let deviceId = currentDeviceId;
        if (!deviceId) {
          deviceId = uuidv4();
          Cookies.set('deviceId', deviceId, { expires: 7 });
        }

        // Register device session
        deviceSessions[email] = deviceId;

        setUser({ email, isDevMode: email === 'admin@iques.in' });
        Cookies.set('token', 'fake-jwt-token', { expires: 1 });
        setLoading(false);
        resolve();
      }, 500);
    });
  };


  const logout = () => {
    if (user && user.email) {
      delete deviceSessions[user.email];
    }
    setUser(null);
    Cookies.remove('token');
    Cookies.remove('deviceId');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
