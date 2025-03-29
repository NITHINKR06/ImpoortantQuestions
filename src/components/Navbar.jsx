'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  // Track which mobile dropdown is open (by dropdown name) instead of a single boolean.
  const [mobileOpenDropdown, setMobileOpenDropdown] = useState(null);
  const closeMenu = () => {
    setIsOpen(false);
    setMobileOpenDropdown(null);
  };
  const pathname = usePathname();

  // Navigation links; FCN and SEPM include sub-pages
  const navLinks = [
    { name: 'Home', href: '/' },
    {
      name: 'FCN',
      dropdown: [
        { name: 'Part 1', href: '/mse2/fcn' },
      ],
    },
    {
      name: 'SEPM',
      dropdown: [
        { name: 'Part 1', href: '/mse2/sepm' },
      ],
    },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <>
      {/* Mobile Navbar */}
      <div className="md:hidden">
        <nav className="bg-gray-500 text-white p-4 relative">
          <div className="container mx-auto flex justify-between items-center">
            <Link href="/" legacyBehavior>
              <a className="text-xl font-semibold">Exam Portal</a>
            </Link>
            <div className="md:hidden">
              <button onClick={() => setIsOpen(true)} className="focus:outline-none">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
          {/* Full-Screen Blurred Overlay with Mobile Dropdown Menu */}
          {isOpen && (
            <div className="fixed inset-0 z-50 backdrop-blur-md flex justify-center items-start pt-10">
              <div className="w-full max-w-md bg-gray-500 bg-opacity-70 p-4 rounded-2xl m-4">
                <div className="flex justify-end">
                  <button onClick={closeMenu} className="text-white focus:outline-none">
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                <div className="flex justify-center mb-4">
                  <h1 className="text-white text-2xl">Important Questions</h1>
                </div>
                <ul className="space-y-4">
                  {navLinks.map((link) => (
                    <li key={link.name}>
                      {link.dropdown ? (
                        <>
                          <button
                            onClick={() =>
                              setMobileOpenDropdown(
                                mobileOpenDropdown === link.name ? null : link.name
                              )
                            }
                            className="w-full text-left block px-4 py-2 hover:bg-gray-700 flex justify-between items-center"
                          >
                            <span>{link.name}</span>
                            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d={
                                  mobileOpenDropdown === link.name
                                    ? 'M5 15l7-7 7 7'
                                    : 'M19 9l-7 7-7-7'
                                }
                              />
                            </svg>
                          </button>
                          {mobileOpenDropdown === link.name && (
                            <ul className="ml-4 space-y-2">
                              {link.dropdown.map((item) => (
                                <li key={item.href}>
                                  <Link href={item.href} legacyBehavior>
                                    <a onClick={closeMenu} className="block px-4 py-2 hover:bg-gray-700">
                                      {item.name}
                                    </a>
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          )}
                        </>
                      ) : (
                        <Link href={link.href} legacyBehavior>
                          <a onClick={closeMenu} className="block px-4 py-2 hover:bg-gray-700">
                            {link.name}
                          </a>
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </nav>
      </div>

      {/* Desktop Navbar */}
      <div className="hidden md:flex justify-center mt-4">
        <div className="w-[70%] flex justify-between items-center bg-gray-200 rounded-full p-4 shadow-lg">
          <Link href="/" legacyBehavior>
            <a className="text-xl font-semibold text-black">Exam Portal</a>
          </Link>
          <ul className="flex space-x-4 items-center">
            {navLinks.map((link) => (
              <li key={link.name} className="relative group">
                {link.dropdown ? (
                  <>
                    <button
                      className={`px-4 py-2 rounded-full transition-colors duration-200 flex items-center ${
                        link.dropdown.some((item) => pathname === item.href)
                          ? 'bg-gray-500 text-white font-bold'
                          : 'hover:bg-gray-700 hover:text-white'
                      }`}
                    >
                      {link.name}
                      <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    <div className="absolute left-0 mt-2 w-40 rounded-md bg-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-50">
                      <ul className="py-2">
                        {link.dropdown.map((item) => (
                          <li key={item.href}>
                            <Link href={item.href} legacyBehavior>
                              <a
                                className={`block px-4 py-2 transition-colors duration-200 ${
                                  pathname === item.href
                                    ? 'bg-gray-500 text-white font-bold'
                                    : 'hover:bg-gray-700 hover:text-white'
                                }`}
                              >
                                {item.name}
                              </a>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </>
                ) : (
                  <Link href={link.href} legacyBehavior>
                    <a
                      className={`px-4 py-2 rounded-full transition-colors duration-200 ${
                        pathname === link.href
                          ? 'bg-gray-500 text-white font-bold'
                          : 'hover:bg-gray-700 hover:text-white'
                      }`}
                    >
                      {link.name}
                    </a>
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
