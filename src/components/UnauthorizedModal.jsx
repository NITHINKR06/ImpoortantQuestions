'use client';

import { motion } from "framer-motion";
import { FaLock } from "react-icons/fa";

export default function UnauthorizedModal() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/30 backdrop-blur-sm z-50">
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="mb-12 p-6 bg-red-50 border border-red-200 rounded-xl shadow-sm max-w-md w-full"
      >
        <div className="flex items-center space-x-4 mb-4">
          <div className="p-3 bg-red-100 rounded-full text-red-600">
            <FaLock size={24} />
          </div>
          <h2 className="text-2xl font-bold text-red-700">Access Restricted</h2>
        </div>
        <p className="text-red-600 mb-4">
          You are not authorized to access the main content of this website. Please contact the administrator
          to request access.
        </p>
        <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-2 sm:space-y-0">
          <a
            href="mailto:nithinpoojari717@gmail.com"
            className="inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
          >
            Request Access
          </a>
          <a
            href="/login"
            className="inline-flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Back to Login
          </a>
        </div>
      </motion.div>
    </div>
  );
}
