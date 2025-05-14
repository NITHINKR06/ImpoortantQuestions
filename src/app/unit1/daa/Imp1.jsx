"use client";

import React, { useState, useEffect } from "react";
import { 
  File, 
  Maximize, 
  Minimize, 
  Download, 
  BookOpen, 
  ChevronLeft, 
  ChevronRight,
  Search,
  Info,
  X,
  Zap
} from "lucide-react";

export default function Daa({ searchQuery = "" }) {
  const resources = [
    {
      id: "daa-main",
      title: "Design & Analysis of Algorithms",
      description: "Complete overview of DAA fundamentals",
      path: "/DAAimpUNIT1.pdf",
      icon: <BookOpen className="text-purple-500" size={24} />
    },
    {
      id: "daa-part1-2",
      title: "Unit 1 - Introduction & Fundamentals",
      description: "Algorithm basics and complexity analysis",
      path: "/Daa_u1c1-2.pdf",
      icon: <File className="text-blue-500" size={24} />
    },
    {
      id: "daa-part3",
      title: "Unit 1 - Advanced Concepts",
      description: "Asymptotic notations and algorithm efficiency",
      path: "/DAa_u1c3.pdf",
      icon: <File className="text-green-500" size={24} />
    },
    {
      id: "daa-part4",
      title: "Unit 1 - Problem Solving",
      description: "Practical applications and problem techniques",
      path: "/DaA _u1c4.pdf",
      icon: <File className="text-orange-500" size={24} />
    }
  ];

  const [activeResource, setActiveResource] = useState(0);
  const [fullscreen, setFullscreen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [showInfoCard, setShowInfoCard] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);
    
    // Check for preferred color scheme
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setDarkMode(true);
    }
    
    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  const handleDownloadPDF = (path, title) => {
    const link = document.createElement("a");
    link.href = path;
    link.download = `${title.replace(/\s+/g, '_')}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const navigateResource = (direction) => {
    if (direction === 'next' && activeResource < resources.length - 1) {
      setActiveResource(activeResource + 1);
    } else if (direction === 'prev' && activeResource > 0) {
      setActiveResource(activeResource - 1);
    }
  };

  const currentResource = resources[activeResource];

  const ResourceCard = ({ resource, index }) => (
    <div 
      className={`flex flex-col p-4 rounded-lg transition-all duration-300 cursor-pointer ${
        activeResource === index 
          ? darkMode 
            ? 'bg-purple-900 border-l-4 border-purple-500 shadow-lg shadow-purple-500/20' 
            : 'bg-purple-100 border-l-4 border-purple-500 shadow-lg'
          : darkMode
            ? 'bg-gray-800 hover:bg-gray-700'
            : 'bg-white hover:bg-gray-100'
      }`}
      onClick={() => setActiveResource(index)}
    >
      <div className="flex items-center mb-2">
        {resource.icon}
        <h3 className={`ml-2 font-semibold ${darkMode ? 'text-white' : 'text-gray-800'}`}>
          {resource.title}
        </h3>
      </div>
      <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
        {resource.description}
      </p>
    </div>
  );

  const InfoCard = () => (
    <div className={`absolute right-0 top-16 w-64 p-4 rounded-lg shadow-lg z-20 ${
      darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'
    }`}>
      <div className="flex justify-between items-center mb-2">
        <h3 className="font-semibold">Resource Information</h3>
        <button onClick={() => setShowInfoCard(false)}>
          <X size={16} />
        </button>
      </div>
      <p className="text-sm mb-2">
        <span className="font-medium">Title:</span> {currentResource.title}
      </p>
      <p className="text-sm mb-2">
        <span className="font-medium">Type:</span> PDF Document
      </p>
      <p className="text-sm">
        <span className="font-medium">Description:</span> {currentResource.description}
      </p>
      <div className="mt-4 text-xs text-center">
        <button 
          className="px-3 py-1 bg-blue-500 text-white rounded-full hover:bg-blue-600"
          onClick={() => handleDownloadPDF(currentResource.path, currentResource.title)}
        >
          Download PDF
        </button>
      </div>
    </div>
  );

  return (
    <>
      {/* Fullscreen Presentation Mode */}
      {fullscreen && (
        <div className="fixed inset-0 bg-black z-50 flex flex-col">
          {/* Minimal Controls Bar */}
          <div className={`flex items-center justify-between p-2 bg-black/80`}>
            <div className="flex items-center">
              {currentResource.icon}
              <h2 className="ml-2 text-lg font-semibold text-white">
                {currentResource.title}
              </h2>
            </div>
            
            <div className="flex items-center space-x-2">
              <button
                className="p-2 rounded-full hover:bg-gray-800 text-white"
                onClick={() => setFullscreen(false)}
                aria-label="Exit fullscreen"
              >
                <Minimize size={20} />
              </button>
              <button
                className="p-2 rounded-full hover:bg-gray-800 text-white"
                onClick={() => handleDownloadPDF(currentResource.path, currentResource.title)}
                aria-label="Download PDF"
              >
                <Download size={20} />
              </button>
            </div>
          </div>
          
          {/* Full Screen PDF */}
          <div className="flex-1 relative">
            <iframe 
              src={currentResource.path} 
              title={currentResource.title} 
              className="w-full h-full"
            />
            
            {/* Large Navigation Buttons */}
            <div className="absolute inset-x-0 top-1/2 transform -translate-y-1/2 flex justify-between px-6">
              <button
                className={`p-4 rounded-full ${
                  activeResource > 0 
                    ? 'bg-black/50 hover:bg-black/70'
                    : 'opacity-0 cursor-default'
                } transition-all duration-200`}
                onClick={() => navigateResource('prev')}
                disabled={activeResource === 0}
              >
                <ChevronLeft size={32} className={activeResource > 0 ? 'text-white' : 'text-gray-700'} />
              </button>
              
              <button
                className={`p-4 rounded-full ${
                  activeResource < resources.length - 1 
                    ? 'bg-black/50 hover:bg-black/70' 
                    : 'opacity-0 cursor-default'
                } transition-all duration-200`}
                onClick={() => navigateResource('next')}
                disabled={activeResource === resources.length - 1}
              >
                <ChevronRight size={32} className={activeResource < resources.length - 1 ? 'text-white' : 'text-gray-700'} />
              </button>
            </div>
          </div>
          
          {/* Minimal Progress Bar */}
          <div className="bg-black/80 px-4 py-2 flex items-center justify-between">
            <span className="text-sm text-white/80">
              {activeResource + 1} of {resources.length}
            </span>
            <div className="w-2/3 bg-gray-800 rounded-full h-1 overflow-hidden">
              <div 
                className="bg-purple-500 h-1 transition-all duration-300"
                style={{ width: `${((activeResource + 1) / resources.length) * 100}%` }}
              ></div>
            </div>
          </div>
        </div>
      )}

      {/* Normal View */}
      {!fullscreen && (
        <main className={`transition-colors duration-300 ${
          darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'
        }`}>
          {/* Header Section */}
          <div className={`py-6 px-4 ${
            darkMode ? 'bg-gray-800' : 'bg-gradient-to-r from-purple-500 to-indigo-600'
          }`}>
            <div className="container mx-auto">
              <div className="flex flex-wrap items-center justify-between">
                <div className="flex items-center mb-4 md:mb-0">
                  <Zap size={28} className="text-yellow-400 mr-2" />
                  <h1 className="text-xl md:text-2xl font-bold text-white">
                    DAA Learning Hub
                  </h1>
                </div>
                <div className="flex items-center space-x-4">
                  <button 
                    className={`p-2 rounded-full ${
                      darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-white/20 hover:bg-white/30'
                    }`}
                    onClick={() => setDarkMode(!darkMode)}
                    aria-label="Toggle dark mode"
                  >
                    {darkMode ? "☀️" : "🌙"}
                  </button>
                  <div className={`relative rounded-full overflow-hidden ${
                    darkMode ? 'bg-gray-700' : 'bg-white/20'
                  }`}>
                    <input
                      type="text"
                      placeholder="Search content..."
                      className={`py-2 pl-10 pr-4 w-40 md:w-64 focus:outline-none ${
                        darkMode ? 'bg-gray-700 text-white' : 'bg-white/20 text-white placeholder-white/70'
                      }`}
                    />
                    <Search size={18} className="absolute left-3 top-2.5 text-white/70" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="container mx-auto px-4 py-6">
            {/* Layout Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
              {/* Sidebar */}
              <div className="lg:col-span-1 space-y-4">
                <h2 className={`text-lg font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                  Course Materials
                </h2>
                
                <div className="space-y-3">
                  {resources.map((resource, index) => (
                    <ResourceCard key={resource.id} resource={resource} index={index} />
                  ))}
                </div>
              </div>

              {/* Main Content Area */}
              <div className="lg:col-span-3">
                <div className={`relative rounded-xl overflow-hidden shadow-xl ${darkMode ? 'shadow-purple-500/10' : ''}`}>
                  {/* PDF Viewer Header */}
                  <div className={`flex items-center justify-between p-4 ${
                    darkMode ? 'bg-gray-800 border-b border-gray-700' : 'bg-white border-b'
                  }`}>
                    <div className="flex items-center">
                      {currentResource.icon}
                      <div className="ml-3">
                        <h2 className={`text-lg font-semibold ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                          {currentResource.title}
                        </h2>
                        <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                          PDF Document
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <button
                        className={`p-2 rounded-full ${
                          darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'
                        }`}
                        onClick={() => setShowInfoCard(!showInfoCard)}
                      >
                        <Info size={isMobile ? 18 : 20} className={darkMode ? 'text-gray-400' : 'text-gray-600'} />
                      </button>
                      <button
                        className={`p-2 rounded-full ${
                          darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'
                        }`}
                        onClick={() => setFullscreen(true)}
                      >
                        <Maximize size={isMobile ? 18 : 20} className={darkMode ? 'text-gray-400' : 'text-gray-600'} />
                      </button>
                      <button
                        className={`p-2 rounded-full ${
                          darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'
                        }`}
                        onClick={() => handleDownloadPDF(currentResource.path, currentResource.title)}
                      >
                        <Download size={isMobile ? 18 : 20} className={darkMode ? 'text-gray-400' : 'text-gray-600'} />
                      </button>
                    </div>
                    
                    {showInfoCard && <InfoCard />}
                  </div>

                  {/* PDF Viewer */}
                  <div className="h-96 md:h-[36rem] relative bg-gray-200">
                    <iframe 
                      src={currentResource.path} 
                      title={currentResource.title} 
                      className="w-full h-full"
                    />
                    
                    {/* Navigation Buttons Overlay */}
                    <div className="absolute inset-x-0 top-1/2 transform -translate-y-1/2 flex justify-between px-4">
                      <button
                        className={`p-3 rounded-full ${
                          activeResource > 0 
                            ? darkMode 
                              ? 'bg-gray-800/70 hover:bg-gray-800' 
                              : 'bg-white/70 hover:bg-white shadow-lg'
                            : 'opacity-0 cursor-default'
                        } transition-all duration-200`}
                        onClick={() => navigateResource('prev')}
                        disabled={activeResource === 0}
                      >
                        <ChevronLeft size={24} className={activeResource > 0 ? 'text-purple-500' : 'text-gray-300'} />
                      </button>
                      
                      <button
                        className={`p-3 rounded-full ${
                          activeResource < resources.length - 1 
                            ? darkMode 
                              ? 'bg-gray-800/70 hover:bg-gray-800' 
                              : 'bg-white/70 hover:bg-white shadow-lg'
                            : 'opacity-0 cursor-default'
                        } transition-all duration-200`}
                        onClick={() => navigateResource('next')}
                        disabled={activeResource === resources.length - 1}
                      >
                        <ChevronRight size={24} className={activeResource < resources.length - 1 ? 'text-purple-500' : 'text-gray-300'} />
                      </button>
                    </div>
                  </div>
                  
                  {/* Progress Bar */}
                  <div className={`flex items-center justify-between px-4 py-2 ${
                    darkMode ? 'bg-gray-800' : 'bg-white'
                  }`}>
                    <div className="flex items-center">
                      <span className={`text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                        {activeResource + 1} of {resources.length}
                      </span>
                    </div>
                    
                    <div className="w-2/3 bg-gray-200 rounded-full h-2 overflow-hidden">
                      <div 
                        className="bg-purple-500 h-2 transition-all duration-300"
                        style={{ width: `${((activeResource + 1) / resources.length) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      )}
    </>
  );
}