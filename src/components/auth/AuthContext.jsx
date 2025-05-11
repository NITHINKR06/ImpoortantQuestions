'use client';

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  useRef,
} from 'react';
import Cookies from 'js-cookie';
import { v4 as uuidv4 } from 'uuid';
import { useRouter } from 'next/navigation';
import authorizedUsers from '../../config/authorizedUsers';

// Create a context to hold auth state & actions
const AuthContext = createContext({});

// Custom hook for easy context consumption
export const useAuth = () => useContext(AuthContext);

// In-memory map: email → deviceId
const deviceSessions = {};

export const AuthProvider = ({ children }) => {
  const [user, setUser]       = useState(null);  // current user
  const [loading, setLoading] = useState(true);  // loading flag while restoring session
  const router                = useRouter();     // Next.js router

  // Ref to always hold the latest user value
  const userRef = useRef(user);
  useEffect(() => { userRef.current = user }, [user]);

  // Truly stable logout function (only re-created if `router` changes)
  const logout = useCallback(() => {
    const email = userRef.current?.email;
    if (email) {
      delete deviceSessions[email];
    }
    setUser(null);
    Cookies.remove('token');
    Cookies.remove('deviceId');
    // Redirect to login page on logout
    router.push('/login');
  }, [router]);

  // Keep a ref to the latest logout for timers
  const logoutRef = useRef(logout);
  useEffect(() => { logoutRef.current = logout }, [logout]);

  // On mount: restore session, schedule auto-logout, then clear loading
  useEffect(() => {
    let timerId = null;

    (async () => {
      try {
        const token = Cookies.get('token');
        if (!token) return;

        const data    = JSON.parse(atob(token));           // decode payload
        const expires = data.timestamp + 24 * 60 * 60 * 1000;
        const now     = Date.now();
        const delay   = expires - now;

        if (delay > 0) {
          // Session still valid
          deviceSessions[data.email] = data.deviceId;
          setUser({ email: data.email, isDevMode: data.isDevMode });

          // Schedule automatic logout exactly when token expires
          timerId = setTimeout(() => {
            logoutRef.current();
          }, delay);
        } else {
          // Already expired: clean up immediately
          Cookies.remove('token');
          Cookies.remove('deviceId');
        }
      } catch {
        // Bad token: clean up
        Cookies.remove('token');
        Cookies.remove('deviceId');
      } finally {
        setLoading(false);
      }
    })();

    // Cleanup on unmount
    return () => {
      if (timerId) clearTimeout(timerId);
    };
  }, []); // <-- run only once on mount

  // Login function: authorize, set cookies, schedule logout, redirect
  const login = async (email) => {
    setLoading(true);

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // 1) ensure email is authorized
        if (!authorizedUsers.includes(email)) {
          setLoading(false);
          return reject(new Error('No access'));
        }

        // 2) single-device enforcement
        const existing = deviceSessions[email];
        const current  = Cookies.get('deviceId');
        if (existing && existing !== current) {
          setLoading(false);
          return reject(new Error('User already logged in on another device'));
        }

        // 3) ensure deviceId cookie
        let deviceId = current;
        if (!deviceId) {
          deviceId = uuidv4();
          Cookies.set('deviceId', deviceId, { expires: 7 });
        }
        deviceSessions[email] = deviceId;

        // 4) build token payload
        const payload = {
          email,
          deviceId,
          isDevMode: email === 'admin@iques.in',
          timestamp: Date.now(),
          id: uuidv4(),
        };

        // 5) persist token in cookie (1-day expiry)
        Cookies.set('token', btoa(JSON.stringify(payload)), {
          expires: 1,
          secure: process.env.NODE_ENV === 'production',
          sameSite: 'strict',
        });

        // 6) update state, stop loading, redirect home
        setUser({ email, isDevMode: payload.isDevMode });
        setLoading(false);
        router.push('/');
        resolve();
      }, 500); // simulate async delay
    });
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
