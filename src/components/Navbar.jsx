'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useAuth } from '@/components/auth/AuthContext';
import { HiMenu, HiX, HiChevronDown, HiLogout, HiLogin, HiUser } from 'react-icons/hi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [mobileOpenDropdown, setMobileOpenDropdown] = useState(null);
  const [mobileSubDropdown, setMobileSubDropdown] = useState(null);
  const { user, logout } = useAuth();
  const router = useRouter();
  const pathname = usePathname();

  const closeMenu = () => {
    setIsOpen(false);
    setMobileOpenDropdown(null);
    setMobileSubDropdown(null);
  };

  const handleLogout = () => {
    logout();
  };

  const handleLogin = () => {
    router.push('/login');
  };

  const navLinks = [
    { name: 'Home', href: '/' },
    {
      name: 'Subjects',
      dropdown: [
        { name: 'Maths', href: '/maths' },
        {
          name: 'FCN',
          href: '/mse2/fcn',
        },
        {
          name: 'MES',
          dropdown: [
            { name: 'MSE2', href: '/mse2/mes' },
            { name: 'Lab MSE', href: '/labmse/mesLab' },
          ],
        },
        {
          name: 'DAA',
          href: '/mse2/daa',
        },
        {
          name: 'SEPM',
          href: '/mse2/sepm',
        },
      ],
    },
    { name: 'Contact', href: '/contact' },
  ];

  // Helper to check if current path is active for a link or its dropdowns
  const isActive = (link) => {
    if (link.href && pathname === link.href) return true;
    if (link.dropdown) {
      return link.dropdown.some((item) => isActive(item));
    }
    return false;
  };

  return (
    <>
      {/* Mobile Navbar */}
      <div className="md:hidden">
        <nav className="bg-gray-700 text-white p-4 relative">
          <div className="container mx-auto flex justify-between items-center">
            <Link href="/" legacyBehavior>
              <a className="text-xl font-bold">Exam Portal</a>
            </Link>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <HiX className="h-6 w-6" /> : <HiMenu className="h-6 w-6" />}
            </button>
          </div>
          {isOpen && (
            <div className="fixed inset-0 z-50 bg-gray-800 bg-opacity-90 backdrop-blur-sm flex flex-col items-center pt-10">
              <button
                onClick={closeMenu}
                className="self-end mr-6 mb-6 focus:outline-none"
                aria-label="Close menu"
              >
                <HiX className="h-8 w-8 text-white" />
              </button>
              <ul className="w-full max-w-md space-y-4 text-lg">
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
                          className="w-full flex justify-between items-center px-6 py-3 bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none"
                        >
                          <span>{link.name}</span>
                          <HiChevronDown
                            className={`h-5 w-5 transition-transform duration-200 ${
                              mobileOpenDropdown === link.name ? 'rotate-180' : ''
                            }`}
                          />
                        </button>
                        {mobileOpenDropdown === link.name && (
                          <ul className="pl-6 mt-2 space-y-2">
                            {link.dropdown.map((item) => (
                              <li key={item.href || item.name}>
                                {item.dropdown ? (
                                  <>
                                    <button
                                      onClick={() =>
                                        setMobileSubDropdown(
                                          mobileSubDropdown === item.name ? null : item.name
                                        )
                                      }
                                      className="w-full flex justify-between items-center px-6 py-2 bg-gray-600 rounded-md hover:bg-gray-500 focus:outline-none"
                                    >
                                      <span>{item.name}</span>
                                      <HiChevronDown
                                        className={`h-4 w-4 transition-transform duration-200 ${
                                          mobileSubDropdown === item.name ? 'rotate-180' : ''
                                        }`}
                                      />
                                    </button>
                                    {mobileSubDropdown === item.name && (
                                      <ul className="pl-6 mt-1 space-y-1">
                                        {item.dropdown.map((subItem) => (
                                          <li key={subItem.href}>
                                            <Link href={subItem.href} legacyBehavior>
                                              <a
                                                onClick={closeMenu}
                                                className="block px-4 py-2 rounded-md hover:bg-gray-500"
                                              >
                                                {subItem.name}
                                              </a>
                                            </Link>
                                          </li>
                                        ))}
                                      </ul>
                                    )}
                                  </>
                                ) : (
                                  <Link href={item.href} legacyBehavior>
                                    <a
                                      onClick={closeMenu}
                                      className="block px-6 py-2 rounded-md hover:bg-gray-500"
                                    >
                                      {item.name}
                                    </a>
                                  </Link>
                                )}
                              </li>
                            ))}
                          </ul>
                        )}
                      </>
                    ) : (
                      <Link href={link.href} legacyBehavior>
                        <a
                          onClick={closeMenu}
                          className="block px-6 py-3 rounded-md hover:bg-gray-500"
                        >
                          {link.name}
                        </a>
                      </Link>
                    )}
                  </li>
                ))}
                <li>
                  {user ? (
                    <button
                      onClick={() => {
                        handleLogout();
                        closeMenu();
                      }}
                      className="w-full flex items-center justify-center space-x-2 px-6 py-3 bg-red-600 rounded-md hover:bg-red-500 focus:outline-none"
                    >
                      <HiLogout className="h-5 w-5" />
                      <span>Logout</span>
                    </button>
                  ) : (
                    <button
                      onClick={() => {
                        handleLogin();
                        closeMenu();
                      }}
                      className="w-full flex items-center justify-center space-x-2 px-6 py-3 bg-indigo-600 rounded-md hover:bg-indigo-500 focus:outline-none"
                    >
                      <HiLogin className="h-5 w-5" />
                      <span>Login</span>
                    </button>
                  )}
                </li>
              </ul>
            </div>
          )}
        </nav>
      </div>

      {/* Desktop Navbar */}
      <div className="hidden md:flex justify-center mt-4 mb-4">
        <div className="w-[70%] flex justify-between items-center bg-gray-100 rounded-full p-4 shadow-lg">
          <Link href="/" legacyBehavior>
            <a className="text-xl font-bold text-gray-900">Exam Portal</a>
          </Link>
          <ul className="flex space-x-6 items-center">
            {navLinks.map((link) => (
              <li key={link.name} className="relative group">
                {link.dropdown ? (
                  <>
                    <button
                      className={`px-4 py-2 rounded-full flex items-center space-x-1 transition-colors duration-200 ${
                        isActive(link) ? 'bg-gray-700 text-white font-semibold' : 'hover:bg-gray-300 hover:text-gray-900'
                      }`}
                    >
                      <span>{link.name}</span>
                      <HiChevronDown
                        className={`h-4 w-4 transition-transform duration-200 ${
                          isActive(link) ? 'rotate-180' : 'rotate-0'
                        }`}
                      />
                    </button>
                    <div className="absolute left-0 mt-2 w-48 rounded-md bg-white shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-50">
                      <ul className="py-2">
                        {link.dropdown.map((item) => (
                          <li key={item.href || item.name} className="relative group">
                            {item.dropdown ? (
                              <>
                                <button
                                  className="w-full flex items-center justify-between px-4 py-2 hover:bg-gray-200 rounded-md"
                                  onClick={(e) => e.preventDefault()}
                                >
                                  <span>{item.name}</span>
                                  <HiChevronDown className="h-4 w-4" />
                                </button>
                                <ul className="absolute left-full top-0 mt-0 w-48 rounded-md bg-white shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-50">
                                  {item.dropdown.map((subItem) => (
                                    <li key={subItem.href}>
                                      <Link href={subItem.href} legacyBehavior>
                                        <a className="block px-4 py-2 hover:bg-gray-200">{subItem.name}</a>
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </>
                            ) : (
                              <Link href={item.href} legacyBehavior>
                                <a className="block px-4 py-2 hover:bg-gray-200">{item.name}</a>
                              </Link>
                            )}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </>
                ) : (
                  <Link href={link.href} legacyBehavior>
                    <a
                      className={`px-4 py-2 rounded-full transition-colors duration-200 ${
                        pathname === link.href ? 'bg-gray-700 text-white font-semibold' : 'hover:bg-gray-300 hover:text-gray-900'
                      }`}
                    >
                      {link.name}
                    </a>
                  </Link>
                )}
              </li>
            ))}
          </ul>
          {user ? (
            <div className="flex items-center space-x-4">
              <HiUser className="h-6 w-6 text-gray-700" />
              <span className="text-gray-700 font-medium">{user.email}</span>
              <button
                onClick={handleLogout}
                className="flex items-center space-x-1 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-500 transition-colors duration-200"
              >
                <HiLogout className="h-5 w-5" />
                <span>Logout</span>
              </button>
            </div>
          ) : (
            <button
              onClick={handleLogin}
              className="flex items-center space-x-1 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-500 transition-colors duration-200"
            >
              <HiLogin className="h-5 w-5" />
              <span>Login</span>
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
