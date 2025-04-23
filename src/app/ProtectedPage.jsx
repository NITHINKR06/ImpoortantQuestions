'use client';

import React, { useEffect } from 'react';
import { useAuth } from '@/components/auth/AuthContext';
import { useRouter } from 'next/navigation';

const ProtectedPage = ({ children }) => {
  const { user, loading } = useAuth();
  const router = useRouter();

  // Use useEffect for navigation to avoid setState during render
  useEffect(() => {
    if (!loading && !user) {
      router.push('/login');
    }
  }, [loading, user, router]);

  // Show loading state while checking authentication
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"></div>
      </div>
    );
  }

  // If not authenticated, show a loading state until the redirect happens
  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"></div>
      </div>
    );
  }

  // If authenticated, render the protected content
  return <>{children}</>;
};

export default ProtectedPage;
