'use client';
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaInstagram, FaPhone, FaEnvelope, FaLock } from 'react-icons/fa';
import { MdSchool, MdEmail } from 'react-icons/md';
import { SiGmail } from 'react-icons/si';
import iam from '@/images/Iam.jpg';
import NextImage from 'next/image';
import { useAuth } from '@/components/auth/AuthContext';

export default function Contact() {
  const { user } = useAuth();
  
  const socialLinks = [
    { icon: <FaGithub />, name: 'GitHub', url: 'https://github.com/NITHINKR06', handle: '@NITHINKR06' },
    { icon: <FaLinkedin />, name: 'LinkedIn', url: 'https://www.linkedin.com/in/nithinkr06', handle: '@nithinkr06' },
    { icon: <FaInstagram />, name: 'Instagram', url: 'https://www.instagram.com/__nithin_poojary_/', handle: '@__nithin_poojary_' },
  ];

  const contactInfo = [
    { icon: <FaPhone />, value: '90199717722', copy: true },
    { icon: <SiGmail />, value: 'nithinpoojari717@gmail.com', copy: true },
    { icon: <MdEmail />, value: 'nnm24cb503@nmamit.in', copy: true },
    { icon: <MdSchool />, value: 'NMAMIT', subtext: 'Cyber Security' },
  ];

  const copyToClipboard = (text) => navigator.clipboard.writeText(text);

  // Render the image onto a canvas with a watermark
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    // Use the native Image constructor from the browser
    const image = new window.Image();
    image.src = iam.src;
    image.onload = () => {
      // Set canvas dimensions to match the image
      canvas.width = image.width;
      canvas.height = image.height;
      ctx.drawImage(image, 0, 0);
      // Add watermark text
      ctx.font = '48px sans-serif';
      ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
      ctx.textAlign = 'center';
      ctx.fillText('© Nithin Poojary', canvas.width / 2, canvas.height / 2);
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen py-12 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-6xl mx-auto">
        {/* Unauthorized User Message */}
        {!user && (
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="mb-12 p-6 bg-red-50 border border-red-200 rounded-xl shadow-sm"
          >
            <div className="flex items-center space-x-4 mb-4">
              <div className="p-3 bg-red-100 rounded-full text-red-600">
                <FaLock size={24} />
              </div>
              <h2 className="text-2xl font-bold text-red-700">Access Restricted</h2>
            </div>
            <p className="text-red-600 mb-4">
              You are not authorized to access the main content of this website. Please contact the administrator
              to request access or use the contact information below to get in touch.
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
        )}

        {/* Profile Section */}
        <motion.div
          initial={{ y: -50 }}
          animate={{ y: 0 }}
          className="flex flex-col items-center mb-16"
        >
          {/* Using a canvas to display the image with watermark */}
          <div onContextMenu={(e) => e.preventDefault()} className="relative mb-6">
            <canvas
              ref={canvasRef}
              className="w-48 h-48 rounded-full border-4 border-gray-100 shadow-lg select-none"
              draggable="false"
            />
            {/* An overlay to prevent selection */}
            <div className="absolute inset-0 rounded-full"></div>
          </div>
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Nithin Poojary</h1>
          <p className="text-xl text-gray-600">Full Stack Developer</p>
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <motion.div
            initial={{ x: -100 }}
            animate={{ x: 0 }}
            className="border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow"
          >
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">Contact Information</h2>
            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center space-x-4 group"
                >
                  <div className="p-3 rounded-xl text-blue-600 border border-gray-200 group-hover:border-blue-500 transition-colors">
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-800 text-lg font-medium">{item.value}</p>
                    {item.subtext && <p className="text-gray-500 text-sm">{item.subtext}</p>}
                  </div>
                  {item.copy && (
                    <button
                      onClick={() => copyToClipboard(item.value)}
                      className="p-2 rounded-lg text-gray-500 hover:text-blue-600 transition-colors"
                    >
                      <span className="text-sm">Copy</span>
                    </button>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ x: 100 }}
            animate={{ x: 0 }}
            className="border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow"
          >
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">Connect With Me</h2>
            <div className="grid grid-cols-1 gap-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  whileHover={{ y: -5 }}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-4 space-x-4 border border-gray-200 rounded-xl hover:border-blue-500 transition-all"
                >
                  <div className="text-2xl text-gray-700">{link.icon}</div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-800">{link.name}</h3>
                    <p className="text-gray-500 text-sm">{link.handle}</p>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-16 text-center text-gray-500"
        >
          <p>© {new Date().getFullYear()} Nithin Poojary. All rights reserved.</p>
        </motion.div>
      </div>
    </motion.div>
  );
}
