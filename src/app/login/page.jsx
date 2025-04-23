'use client';

import React, { useState } from 'react';
import { useAuth } from '../../components/auth/AuthContext';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { HiMail, HiLockClosed } from 'react-icons/hi';
import UnauthorizedModal from '../../components/UnauthorizedModal';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showModal, setShowModal] = useState(false);
  const { login } = useAuth();
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
      router.push('/');
    } catch (err) {
      if (err.message === 'No access' || err.message === 'User already logged in on another device') {
        setShowModal(true);
      } else {
        alert(err.message || 'Failed to login. Please check your credentials.');
      }
    }
  };


  return (
    <>
      {showModal && <UnauthorizedModal />}
      <div className=" flex mt-14 items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
          <div className="text-center mb-8">
            <div className="mx-auto h-20 w-20 rounded-full bg-indigo-600 flex items-center justify-center mb-4">
              <HiLockClosed className="h-10 w-10 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">Welcome Back</h2>
            <p className="text-gray-600 mt-2">Sign in to access your account</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <HiMail className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="w-full pl-10 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

          <></>

          <></>
          <></>


            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Sign in
              </button>
            </div>
          </form>

          <div className="mt-6">
          </div>


          <div className="mt-6 text-center">
            {/* Removed signup link as per request */}
          </div>
        </div>
      </div>
    </>
  );
}
