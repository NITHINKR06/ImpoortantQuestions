'use client'
import React, { useState } from 'react';
import Imp1 from './Imp1.jsx';
import Imp2 from './Imp2.jsx';
import Imp3 from './Imp3.jsx';
import ProtectedPage from '../../ProtectedPage.jsx';

const SEPMImportantQuestions = () => {
  // State to track the active component
  const [activeComponent, setActiveComponent] = useState("imp1");

  // State to hold the search query
  const [searchQuery, setSearchQuery] = useState("");

  // Function to render the active component with searchQuery prop
  const renderActiveComponent = () => {
    switch (activeComponent) {
      case "imp1":
        return <Imp1 searchQuery={searchQuery} />;
      case "imp2":
        return <Imp2 searchQuery={searchQuery} />;
      case "imp3":
        return <Imp3 searchQuery={searchQuery} />;
      default:
        return <Imp1 searchQuery={searchQuery} />;
    }
  };

  // Base styling for the buttons
  const baseButtonClasses =
    "px-4 py-2 rounded-full font-semibold transition-colors duration-200 mr-3 mb-3";

  // Function to determine styling for each button
  const buttonClasses = (btn) =>
    activeComponent === btn
      ? `${baseButtonClasses} bg-indigo-700 text-white`
      : `${baseButtonClasses} bg-white text-indigo-700 border border-indigo-700`;

  return (
    <ProtectedPage>
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-200">
      {/* Fixed Header */}
      <header className="text-black py-6 shadow-md">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-4xl font-extrabold tracking-wide">
            FCN Important Questions
          </h1><br />

          {/* Buttons to switch between pages */}
          <div className="mb-6 flex flex-wrap items-center">
            <button
              className={buttonClasses("imp1")}
              onClick={() => setActiveComponent("imp1")}
            >
              Important
            </button>
            <button
              className={buttonClasses("imp2")}
              onClick={() => setActiveComponent("imp2")}
            >
              Videos Uint-2
            </button>
            <button
              className={buttonClasses("imp3")}
              onClick={() => setActiveComponent("imp3")}
            >
              Images
            </button>
            {/* Search input */}
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="ml-auto px-3 py-2 border border-indigo-700 rounded-md text-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
        </div>
      </header>

      {/* Active Component Content */}
      <div className="max-w-6xl mx-auto px-6 py-10">
        {renderActiveComponent()}
      </div>

      {/* Footer */}
      {/* <footer className="bg-gray-800 text-gray-300 py-4 mt-12">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-sm">&copy; 2025 SEPM Documentation. All rights reserved.</p>
        </div>
      </footer> */}
    </div>
    </ProtectedPage>
  );
};

export default SEPMImportantQuestions;
