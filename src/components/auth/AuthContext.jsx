'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import { v4 as uuidv4 } from 'uuid';
import authorizedUsers from '../../config/authorizedUsers';

const AuthContext = createContext({});

export const useAuth = () => useContext(AuthContext);

// Map to track user sessions: email -> deviceId
const deviceSessions = {};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); // Start with loading true
  
  // Check for existing token on mount and restore session
  useEffect(() => {
    const restoreSession = () => {
      try {
        const token = Cookies.get('token');
        if (token) {
          // Decode the token
          const tokenData = JSON.parse(atob(token));
          
          // Verify token hasn't expired (24 hours)
          const now = new Date().getTime();
          const tokenAge = now - tokenData.timestamp;
          const oneDayInMs = 24 * 60 * 60 * 1000;
          
          if (tokenAge < oneDayInMs) {
            // Token is valid, restore user session
            const email = tokenData.email;
            
            // Restore device session
            if (tokenData.deviceId) {
              deviceSessions[email] = tokenData.deviceId;
            }
            
            // Set user state
            setUser({ 
              email, 
              isDevMode: email === 'admin@iques.in' 
            });
          } else {
            // Token expired, clear it
            Cookies.remove('token');
            Cookies.remove('deviceId');
          }
        }
      } catch (error) {
        console.error('Error restoring session:', error);
        // If there's an error parsing the token, remove it
        Cookies.remove('token');
        Cookies.remove('deviceId');
      } finally {
        setLoading(false);
      }
    };
    
    restoreSession();
  }, []);

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

        // Generate a unique token with user information
        const tokenData = {
          email,
          deviceId,
          isDevMode: email === 'admin@iques.in',
          timestamp: new Date().getTime(),
          id: uuidv4()
        };
        
        // Convert token data to string and encode
        const tokenString = btoa(JSON.stringify(tokenData));
        
        // Set the token in cookies with appropriate settings
        Cookies.set('token', tokenString, { 
          expires: 1, // Expires in 1 day
          secure: process.env.NODE_ENV === 'production', // Secure in production
          sameSite: 'strict' // Restrict to same site
        });

        setUser({ email, isDevMode: email === 'admin@iques.in' });
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
    
    // Remove all authentication cookies
    Cookies.remove('token');
    Cookies.remove('deviceId');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
