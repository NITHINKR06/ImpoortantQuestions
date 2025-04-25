'use client';
// this is the navbar component styled with tailwind css and react icons 

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useAuth } from '@/components/auth/AuthContext';
import {
  HiMenu,
  HiX,
  HiChevronDown,
  HiLogout,
  HiLogin,
  HiUser,
  HiAcademicCap,
  HiHome,
  HiMail,
  HiBookOpen,
  HiOutlineDocumentText,
  HiOutlineLibrary,
  HiOutlineChartBar,
  HiOutlineCode,
  HiCog
} from 'react-icons/hi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeSubDropdown, setActiveSubDropdown] = useState(null);
  const { user, logout } = useAuth();
  const router = useRouter();
  const pathname = usePathname();
  const dropdownRef = useRef(null);
  const mobileMenuRef = useRef(null);

  // ① Now ignore clicks inside mobile menu too
  useEffect(() => {
    const handleClickOutside = (event) => {
      // if clicking inside mobile menu, do nothing
      if (
        mobileMenuRef.current &&
        mobileMenuRef.current.contains(event.target)
      ) {
        return;
      }

      // otherwise if click is outside desktop dropdown, close both dropdowns
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setActiveDropdown(null);
        setActiveSubDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // reset menus on route change
  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
    setActiveSubDropdown(null);
  }, [pathname]);

  const closeMenu = () => {
    setIsOpen(false);
    setActiveDropdown(null);
    setActiveSubDropdown(null);
  };

  const handleLogout = () => {
    logout();
    closeMenu();
  };

  const handleLogin = () => {
    router.push('/login');
    closeMenu();
  };

  const toggleDropdown = (name) => {
    setActiveDropdown(activeDropdown === name ? null : name);
    setActiveSubDropdown(null);
  };

  const toggleSubDropdown = (name) => {
    setActiveSubDropdown(activeSubDropdown === name ? null : name);
  };

  const subjectIcons = {
    'Maths': <HiOutlineChartBar className="h-5 w-5" />,
    'FCN':   <HiOutlineLibrary className="h-5 w-5" />,
    'MES':   <HiCog className="h-5 w-5" />,
    'DAA':   <HiOutlineCode className="h-5 w-5" />,
    'SEPM':  <HiOutlineDocumentText className="h-5 w-5" />
  };

  const renderSubjectIcon = (subject) =>
    subjectIcons[subject] || <HiBookOpen className="h-5 w-5" />;

  const navLinks = [
    { name: 'Home', href: '/', icon: <HiHome className="h-5 w-5" /> },
    {
      name: 'Unit 1',
      icon: <HiAcademicCap className="h-5 w-5" />,
      dropdown: [
        { name: 'Maths', href: '/unit1/maths', icon: subjectIcons.Maths },
        { name: 'FCN',   href: '/unit1/fcn',   icon: subjectIcons.FCN },
        { name: 'MES',   href: '/unit1/mes',   icon: subjectIcons.MES },
        { name: 'DAA',   href: '/unit1/daa',   icon: subjectIcons.DAA },
        { name: 'SEPM',  href: '/unit1/sepm',  icon: subjectIcons.SEPM },
      ]
    },
    {
      name: 'Unit 2',
      icon: <HiAcademicCap className="h-5 w-5" />,
      dropdown: [
        { name: 'Maths', href: '/unit2/maths', icon: subjectIcons.Maths },
        { name: 'FCN',   href: '/unit2/fcn',   icon: subjectIcons.FCN },
        { name: 'MES',   href: '/unit2/mes',   icon: subjectIcons.MES },
        { name: 'DAA',   href: '/unit2/daa',   icon: subjectIcons.DAA },
        { name: 'SEPM',  href: '/unit2/sepm',  icon: subjectIcons.SEPM },
      ]
    },
    {
      name: 'Unit 3',
      icon: <HiAcademicCap className="h-5 w-5" />,
      dropdown: [
        { name: 'Maths', href: '/unit3/maths', icon: subjectIcons.Maths },
        { name: 'FCN',   href: '/unit3/fcn',   icon: subjectIcons.FCN },
        { name: 'MES',   href: '/unit3/mes',   icon: subjectIcons.MES },
        { name: 'DAA',   href: '/unit3/daa',   icon: subjectIcons.DAA },
        { name: 'SEPM',  href: '/unit3/sepm',  icon: subjectIcons.SEPM },
      ]
    },
    { name: 'Contact', href: '/contact', icon: <HiMail className="h-5 w-5" /> },
  ];

  const isActive = (href) => pathname === href;

  const getCurrentPageInfo = () => {
    const paths = pathname.split('/').filter(Boolean);
    if (paths.length >= 2) {
      const unit = paths[0]
        .replace(/^unit/, 'Unit ')
        .replace(/^\w/, (c) => c.toUpperCase());
      const subject = paths[1].toUpperCase();
      return { unit, subject };
    }
    return null;
  };

  const pageInfo = getCurrentPageInfo();

  return (
    <div className="relative">
      {/* Page context banner */}
      {pageInfo && (
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-2">
          <div className="container mx-auto px-4 flex items-center justify-center">
            {renderSubjectIcon(pageInfo.subject)}
            <span className="ml-2 font-medium">
              {pageInfo.unit} / {pageInfo.subject}
            </span>
          </div>
        </div>
      )}

      {/* Mobile Navbar */}
      <div className="md:hidden">
        <nav className="bg-white shadow-lg dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center h-16">
              <Link href="/" onClick={closeMenu}>
                <div className="flex items-center space-x-2">
                  <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-2 rounded-lg">
                    <HiAcademicCap className="h-6 w-6" />
                  </div>
                  <span className="font-bold text-lg text-gray-900 dark:text-white">
                    Exam Portal
                  </span>
                </div>
              </Link>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 text-gray-500 dark:text-gray-400"
              >
                {isOpen ? <HiX className="h-6 w-6" /> : <HiMenu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {/* Mobile menu */}
          {isOpen && (
            <div
              ref={mobileMenuRef}
              className="absolute z-50 inset-x-0 top-16 bg-white shadow-lg dark:bg-gray-900 transition-all duration-300 ease-in-out"
              style={{ maxHeight: '80vh', overflow: 'auto' }}
            >
              <div className="container mx-auto px-4 py-3">
                <div className="grid gap-y-6">
                  {/* User section for mobile */}
                  <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4">
                    {user ? (
                      <div className="space-y-3">
                        <div className="flex items-center space-x-3">
                          <div className="bg-indigo-100 dark:bg-gray-700 p-2 rounded-full">
                            <HiUser className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
                          </div>
                          <div>
                            <p className="font-medium text-gray-900 dark:text-white">{user.email}</p>
                            <p className="text-sm text-gray-500 dark:text-gray-400">Student</p>
                          </div>
                        </div>
                        <button
                          onClick={handleLogout}
                          className="w-full flex items-center justify-center space-x-2 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition duration-150 ease-in-out"
                        >
                          <HiLogout className="h-5 w-5" />
                          <span>Logout</span>
                        </button>
                      </div>
                    ) : (
                      <button
                        onClick={handleLogin}
                        className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-4 py-3 rounded-lg transition duration-150 ease-in-out"
                      >
                        <HiLogin className="h-5 w-5" />
                        <span>Login to Your Account</span>
                      </button>
                    )}
                  </div>

                  {/* Navigation links for mobile */}
                  <nav>
                    <ul className="space-y-1">
                      {navLinks.map((link) => (
                        <li key={link.name}>
                          {link.dropdown ? (
                            <div className="mb-2">
                              <button
                                onClick={() => toggleDropdown(link.name)}
                                className={`w-full flex items-center justify-between px-4 py-3 rounded-xl
                                  ${activeDropdown === link.name
                                    ? 'bg-indigo-50 text-indigo-600 dark:bg-gray-800 dark:text-indigo-400'
                                    : 'text-gray-700 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-800'}`}
                              >
                                <div className="flex items-center space-x-3">
                                  {link.icon}
                                  <span className="font-medium">{link.name}</span>
                                </div>
                                <HiChevronDown
                                  className={`h-5 w-5 transition-transform duration-200 ${
                                    activeDropdown === link.name ? 'rotate-180' : ''
                                  }`}
                                />
                              </button>

                              {activeDropdown === link.name && (
                                <div className="mt-2 ml-5 border-l-2 border-indigo-200 dark:border-gray-700 pl-4 space-y-1">
                                  {link.dropdown.map((item) => (
                                    <Link key={item.href} href={item.href}>
                                      <div
                                        onClick={closeMenu}
                                        className={`flex items-center space-x-3 px-4 py-2 rounded-lg ${
                                          isActive(item.href)
                                            ? 'bg-indigo-100 text-indigo-700 font-medium dark:bg-gray-800 dark:text-indigo-400'
                                            : 'text-gray-700 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-800'
                                        }`}
                                      >
                                        {item.icon}
                                        <span>{item.name}</span>
                                      </div>
                                    </Link>
                                  ))}
                                </div>
                              )}
                            </div>
                          ) : (
                            <Link href={link.href}>
                              <div
                                onClick={closeMenu}
                                className={`flex items-center space-x-3 px-4 py-3 rounded-xl ${
                                  isActive(link.href)
                                    ? 'bg-indigo-50 text-indigo-600 font-medium dark:bg-gray-800 dark:text-indigo-400'
                                    : 'text-gray-700 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-800'
                                }`}
                              >
                                {link.icon}
                                <span className="font-medium">{link.name}</span>
                              </div>
                            </Link>
                          )}
                        </li>
                      ))}
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          )}
        </nav>
      </div>

      {/* Desktop Navbar */}
      <div ref={dropdownRef} className="hidden md:block">
        <div className="bg-white shadow-lg dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center h-16">
              {/* Logo */}
              <div className="flex items-center">
                <Link href="/">
                  <div className="flex items-center space-x-3">
                    <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-2 rounded-lg">
                      <HiAcademicCap className="h-6 w-6" />
                    </div>
                    <span className="font-bold text-xl text-gray-900 dark:text-white">
                      Exam Portal
                    </span>
                  </div>
                </Link>
              </div>

              {/* Main navigation */}
              <div className="hidden lg:flex items-center space-x-1">
                {navLinks.map((link) => (
                  <div key={link.name} className="relative">
                    {link.dropdown ? (
                      <>
                        <button
                          onClick={() => toggleDropdown(link.name)}
                          className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition duration-150 ease-in-out ${
                            activeDropdown === link.name
                              ? 'bg-indigo-50 text-indigo-600 dark:bg-gray-800 dark:text-indigo-400'
                              : 'text-gray-700 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-800'
                          }`}
                        >
                          {link.icon}
                          <span>{link.name}</span>
                          <HiChevronDown
                            className={`h-5 w-5 transition-transform duration-200 ${
                              activeDropdown === link.name ? 'rotate-180' : ''
                            }`}
                          />
                        </button>

                        {activeDropdown === link.name && (
                          <div className="absolute z-50 left-0 mt-2 w-64 bg-white rounded-lg shadow-xl dark:bg-gray-800 border border-gray-100 dark:border-gray-700 py-2">
                            {link.dropdown.map((item) => (
                              <Link
                                key={item.href}
                                href={item.href}
                                onClick={closeMenu}
                              >
                                <div className={`flex items-center space-x-3 px-4 py-2 hover:bg-gray-50 dark:hover:bg-gray-700 ${
                                  isActive(item.href)
                                    ? 'bg-indigo-50 text-indigo-600 font-medium dark:bg-gray-700 dark:text-indigo-400'
                                    : 'text-gray-700 dark:text-gray-300'
                                }`}>
                                  {item.icon}
                                  <span>{item.name}</span>
                                </div>
                              </Link>
                            ))}
                          </div>
                        )}
                      </>
                    ) : (
                      <Link href={link.href}>
                        <div className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition duration-150 ease-in-out ${
                          isActive(link.href)
                            ? 'bg-indigo-50 text-indigo-600 dark:bg-gray-800 dark:text-indigo-400'
                            : 'text-gray-700 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-800'
                        }`}>
                          {link.icon}
                          <span>{link.name}</span>
                        </div>
                      </Link>
                    )}
                  </div>
                ))}
              </div>

              {/* User section */}
              <div className="flex items-center">
                {/* Condensed menu for medium screens */}
                <div className="lg:hidden">
                  <button
                    onClick={() => toggleDropdown('menu')}
                    className="p-2 rounded-lg text-gray-700 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-800"
                  >
                    <HiMenu className="h-6 w-6" />
                  </button>

                  {activeDropdown === 'menu' && (
                    <div className="absolute right-4 z-50 mt-2 w-64 bg-white rounded-lg shadow-xl dark:bg-gray-800 border border-gray-100 dark:border-gray-700">
                      <nav className="py-2">
                        {navLinks.map((link) => (
                          <div key={link.name}>
                            {link.dropdown ? (
                              <>
                                <button
                                  onClick={() => toggleSubDropdown(link.name)}
                                  className={`flex items-center justify-between w-full px-4 py-2 text-left hover:bg-gray-50 dark:hover:bg-gray-700 ${
                                    activeSubDropdown === link.name
                                      ? 'bg-indigo-50 text-indigo-600 font-medium dark:bg-gray-700 dark:text-indigo-400'
                                      : 'text-gray-700 dark:text-gray-300'
                                  }`}
                                >
                                  <div className="flex items-center space-x-3">
                                    {link.icon}
                                    <span>{link.name}</span>
                                  </div>
                                  <HiChevronDown
                                    className={`h-5 w-5 transition-transform duration-200 ${
                                      activeSubDropdown === link.name ? 'rotate-180' : ''
                                    }`}
                                  />
                                </button>

                                {activeSubDropdown === link.name && (
                                  <div className="bg-gray-50 dark:bg-gray-700 py-2">
                                    {link.dropdown.map((item) => (
                                      <Link
                                        key={item.href}
                                        href={item.href}
                                        onClick={closeMenu}
                                      >
                                        <div className={`flex items-center space-x-3 pl-10 pr-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 ${
                                          isActive(item.href)
                                            ? 'text-indigo-600 font-medium dark:text-indigo-400'
                                            : 'text-gray-700 dark:text-gray-300'
                                        }`}>
                                          {item.icon}
                                          <span>{item.name}</span>
                                        </div>
                                      </Link>
                                    ))}
                                  </div>
                                )}
                              </>
                            ) : (
                              <Link href={link.href} onClick={closeMenu}>
                                <div className={`flex items-center space-x-3 px-4 py-2 hover:bg-gray-50 dark:hover:bg-gray-700 ${
                                  isActive(link.href)
                                    ? 'bg-indigo-50 text-indigo-600 font-medium dark:bg-gray-700 dark:text-indigo-400'
                                    : 'text-gray-700 dark:text-gray-300'
                                }`}>
                                  {link.icon}
                                  <span>{link.name}</span>
                                </div>
                              </Link>
                            )}
                          </div>
                        ))}
                      </nav>
                    </div>
                  )}
                </div>

                {/* User controls */}
                <div className="ml-4">
                  {user ? (
                    <div className="flex items-center space-x-4">
                      <div className="hidden xl:flex items-center space-x-3">
                        <div className="bg-indigo-100 dark:bg-gray-700 p-1 rounded-full">
                          <HiUser className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
                        </div>
                        <span className="text-gray-700 dark:text-gray-300">{user.email}</span>
                      </div>
                      <button
                        onClick={handleLogout}
                        className="flex items-center space-x-1 bg-red-600 hover:bg-red-700 text-white px-3 py-2 rounded-lg transition duration-150 ease-in-out"
                      >
                        <HiLogout className="h-5 w-5" />
                        <span className="hidden sm:inline">Logout</span>
                      </button>
                    </div>
                  ) : (
                    <button
                      onClick={handleLogin}
                      className="flex items-center space-x-1 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-4 py-2 rounded-lg transition duration-150 ease-in-out"
                    >
                      <HiLogin className="h-5 w-5" />
                      <span>Login</span>
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
