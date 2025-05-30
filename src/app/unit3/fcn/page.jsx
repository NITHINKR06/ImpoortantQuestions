'use client'
import React, { useState } from 'react';
import Imp1 from './Imp1.jsx';
import Imp2 from './Imp2.jsx';
import Imp3 from './Imp3.jsx';
import ProtectedPage from '@/app/ProtectedPage.jsx';


const SEPMImportantQuestions = () => {
  // State to track the active component
  const [activeComponent, setActiveComponent] = useState("imp1");

  // Function to render the active component
  const renderActiveComponent = () => {
    switch (activeComponent) {
      case "imp1":
        return <Imp1 />;
      // case "imp2":
      //   return <Imp2 />;
      // case "imp3":
      //   return <Imp3 />;
      default:
        return <Imp1 />;
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
