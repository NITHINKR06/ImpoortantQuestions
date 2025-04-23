'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import { 
  onAuthStateChanged, 
  signInWithEmailAndPassword,
  signOut,
  updateProfile
} from 'firebase/auth';
import { auth, db } from '@/config/firebase';
import { useRouter } from 'next/navigation';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { v4 as uuidv4 } from 'uuid';

const AuthContext = createContext({});

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [sessionId, setSessionId] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        // Check session ID in Firestore
        const userRef = doc(db, 'userSessions', user.uid);
        const userDoc = await getDoc(userRef);
        if (userDoc.exists()) {
          const storedSessionId = userDoc.data().sessionId;
          if (storedSessionId !== sessionId) {
            // Session ID mismatch, sign out
            await signOut(auth);
            setUser(null);
            router.push('/login');
            setLoading(false);
            return;
          }
        } else {
          // No session stored, sign out for safety
          await signOut(auth);
          setUser(null);
          router.push('/login');
          setLoading(false);
          return;
        }
        setUser(user);
      } else {
        setUser(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, [router, sessionId]);

  const login = async (email, password) => {
    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      const user = result.user;
      const newSessionId = uuidv4();
      setSessionId(newSessionId);
      // Store session ID in Firestore
      const userRef = doc(db, 'userSessions', user.uid);
      await setDoc(userRef, { sessionId: newSessionId });
    } catch (error) {
      throw error;
    }
  };

  const logout = async () => {
    try {
      if (user) {
        const userRef = doc(db, 'userSessions', user.uid);
        await setDoc(userRef, { sessionId: null });
      }
      await signOut(auth);
      router.push('/login');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
