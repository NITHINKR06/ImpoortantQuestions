'use client';
import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';

const SECRET_KEY = '123654'; // Change this to your desired secret key

const ProtectedPage = ({ children }) => {
  const [accessGranted, setAccessGranted] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [enteredKey, setEnteredKey] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    const cookieKey = Cookies.get('accessGranted');
    if (cookieKey === 'true') {
      setAccessGranted(true);
    } else {
      setShowModal(true);
      // Redirect to the home page if the token is not found
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (enteredKey === SECRET_KEY) {
      // Set cookie for 1 day (adjust as needed)
      Cookies.set('accessGranted', 'true', { expires: 1 });
      setAccessGranted(true);
      setShowModal(false);
    } else {
      setError('Invalid key. Please try again.');
    }
  };

  if (!accessGranted) {
    return (
      <>
 {showModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-00 bg-opacity-10 backdrop-blur-md">
            <div className="bg-gray-400 bg-opacity-50 rounded-lg p-6 max-w-sm mx-auto">
              <h2 className="text-xl font-bold mb-4 text-center text-amber-50">Enter Secret Key</h2>
              {error && <p className="text-red-500 mb-2">{error}</p>}
              <form onSubmit={handleSubmit}>
                <input
                  type="password"
                  value={enteredKey}
                  onChange={(e) => setEnteredKey(e.target.value)}
                  placeholder="Secret Key"
                  className="w-full border border-gray-300 rounded px-3 py-2 mb-4"
                />
                <button
                  type="submit"
                  className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        )}
      </>
    );
  }

  return (
    <div className="relative">
      {/* Logout button */}
      {children}
    </div>
  );
};

export default ProtectedPage;
