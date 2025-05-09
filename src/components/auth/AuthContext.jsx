'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import { v4 as uuidv4 } from 'uuid';
import authorizedUsers from '../../config/authorizedUsers';

const AuthContext = createContext({});

export const useAuth = () => useContext(AuthContext);

// In-memory map: email → deviceId
const deviceSessions = {};

export const AuthProvider = ({ children }) => {
  const [user,    setUser]    = useState(null);
  const [loading, setLoading] = useState(true);

  // Restore session on mount
  useEffect(() => {
    (async () => {
      try {
        const token = Cookies.get('token');
        if (token) {
          const data = JSON.parse(atob(token));
          const now  = Date.now();
          if (now - data.timestamp < 24 * 60 * 60 * 1000) {
            deviceSessions[data.email] = data.deviceId;
            setUser({ email: data.email, isDevMode: data.isDevMode });
          } else {
            Cookies.remove('token');
            Cookies.remove('deviceId');
          }
        }
      } catch {
        Cookies.remove('token');
        Cookies.remove('deviceId');
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  const login = async (email) => {
    setLoading(true);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (!authorizedUsers.includes(email)) {
          setLoading(false);
          return reject(new Error('No access'));
        }

        const existing = deviceSessions[email];
        const current  = Cookies.get('deviceId');
        if (existing && existing !== current) {
          setLoading(false);
          return reject(new Error('User already logged in on another device'));
        }

        // Ensure deviceId
        let deviceId = current;
        if (!deviceId) {
          deviceId = uuidv4();
          Cookies.set('deviceId', deviceId, { expires: 7 });
        }
        deviceSessions[email] = deviceId;

        // Create token
        const payload = {
          email,
          deviceId,
          isDevMode: email === 'admin@iques.in',
          timestamp: Date.now(),
          id: uuidv4(),
        };
        Cookies.set('token', btoa(JSON.stringify(payload)), {
          expires: 1,
          secure: process.env.NODE_ENV === 'production',
          sameSite: 'strict',
        });

        setUser({ email, isDevMode: payload.isDevMode });
        setLoading(false);
        resolve();
      }, 500);
    });
  };

  const logout = () => {
    if (user?.email) delete deviceSessions[user.email];
    setUser(null);
    Cookies.remove('token');
    Cookies.remove('deviceId');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};
