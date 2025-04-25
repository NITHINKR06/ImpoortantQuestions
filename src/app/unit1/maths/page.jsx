'use client';
import React, { useState, useEffect } from 'react';
import { File, ChevronLeft, ChevronRight, Maximize, Minimize, Download, Menu, X } from 'lucide-react';

export default function MathsPage() {
  // Sample data for images
  const [images, setImages] = useState([
    {
      id: 1,
      title: "Pythagorean Theorem",
      src: "/api/placeholder/400/300",
      description: "Visual representation of a² + b² = c² showing the relationship in a right triangle."
    },
    {
      id: 2,
      title: "Unit Circle",
      src: "/api/placeholder/400/300",
      description: "Key angles and coordinates on the unit circle for trigonometric functions."
    },
    {
      id: 3,
      title: "Calculus Fundamentals",
      src: "/api/placeholder/400/300",
      description: "Illustration of derivative as the slope of a tangent line."
    },
    {
      id: 4,
      title: "Linear Algebra Vectors",
      src: "/api/placeholder/400/300",
      description: "Vector operations and transformations in 2D space."
    }
  ]);

  // PDF viewer state
  const [pdfFullscreen, setPdfFullscreen] = useState(false);
  
  // Image gallery state
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Mobile menu state
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // Check if on mobile view
  const [isMobile, setIsMobile] = useState(false);
  
  // Handle window resize
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    
    return () => {
      window.removeEventListener('resize', checkIfMobile);
    };
  }, []);
  
  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };
  
  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile Header */}
      <div className="md:hidden bg-blue-600 text-white p-4 sticky top-0 z-10 shadow-md flex justify-between items-center">
        <h1 className="text-xl font-bold">Math Resources</h1>
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="p-1 rounded-md hover:bg-blue-700"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobile && isMobileMenuOpen && (
        <div className="fixed inset-0 bg-blue-900/95 z-20 pt-16 px-4 text-white">
          <div className="flex flex-col space-y-4 text-lg">
            <button 
              className="flex items-center space-x-2 p-2 hover:bg-blue-800 rounded"
              onClick={() => {
                setIsMobileMenuOpen(false);
                // Scroll to PDF section
                document.getElementById('pdf-section').scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <File size={20} />
              <span>PDF Handbook</span>
            </button>
            <button 
              className="flex items-center space-x-2 p-2 hover:bg-blue-800 rounded" 
              onClick={() => {
                setIsMobileMenuOpen(false);
                // Scroll to Gallery section
                document.getElementById('gallery-section').scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <ChevronRight size={20} />
              <span>Image Gallery</span>
            </button>
          </div>
        </div>
      )}
      
      <div className="max-w-6xl mx-auto p-4 md:p-6">
        {/* Desktop Header */}
        <h1 className="hidden md:block text-3xl font-bold text-gray-800 mb-6">Mathematics Resources</h1>
        
        {/* PDF Viewer Section */}
        <div 
          id="pdf-section" 
          className={`bg-white rounded-lg shadow-md mb-6 overflow-hidden ${pdfFullscreen ? 'fixed inset-0 z-50 p-4' : ''}`}
        >
          <div className="flex items-center justify-between p-3 md:p-4 bg-blue-600 text-white">
            <div className="flex items-center">
              <File className="mr-2" size={isMobile ? 18 : 20} />
              <h2 className="text-lg md:text-xl font-semibold">Mathematics Handbook</h2>
            </div>
            <div className="flex items-center space-x-1 md:space-x-2">
              <button 
                className="p-1 md:p-2 hover:bg-blue-700 rounded-full"
                onClick={() => setPdfFullscreen(!pdfFullscreen)}
              >
                {pdfFullscreen ? <Minimize size={isMobile ? 18 : 20} /> : <Maximize size={isMobile ? 18 : 20} />}
              </button>
              <button className="p-1 md:p-2 hover:bg-blue-700 rounded-full">
                <Download size={isMobile ? 18 : 20} />
              </button>
            </div>
          </div>
          
          <div className={`bg-gray-100 ${pdfFullscreen ? 'h-full' : 'h-64 md:h-96'} flex items-center justify-center`}>
            {/* This would be replaced with an actual PDF viewer component */}
            <div className="text-center p-4">
              <p className="text-gray-500 mb-2 md:mb-4">PDF Viewer would be displayed here</p>
              <p className="text-xs md:text-sm text-gray-400">Using an appropriate PDF library like react-pdf</p>
            </div>
          </div>
        </div>
        
        {/* Image Gallery */}
        <div id="gallery-section" className="bg-white rounded-lg shadow-md">
          <div className="p-3 md:p-4 bg-indigo-600 text-white">
            <h2 className="text-lg md:text-xl font-semibold">Mathematical Concepts Gallery</h2>
          </div>
          
          <div className="p-4 md:p-6">
            {/* Main Image Display */}
            <div className="mb-4 md:mb-6 relative">
              <img 
                src={images[currentImageIndex].src} 
                alt={images[currentImageIndex].title}
                className="w-full h-48 md:h-64 object-contain bg-gray-100 rounded-lg"
              />
              
              {/* Navigation Arrows */}
              <button 
                onClick={prevImage}
                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/70 hover:bg-white p-1 md:p-2 rounded-full shadow-md"
                aria-label="Previous image"
              >
                <ChevronLeft size={isMobile ? 20 : 24} />
              </button>
              <button 
                onClick={nextImage}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/70 hover:bg-white p-1 md:p-2 rounded-full shadow-md"
                aria-label="Next image"
              >
                <ChevronRight size={isMobile ? 20 : 24} />
              </button>
            </div>
            
            {/* Image Details */}
            <div className="mb-4 md:mb-6">
              <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-1 md:mb-2">
                {images[currentImageIndex].title}
              </h3>
              <p className="text-sm md:text-base text-gray-600">
                {images[currentImageIndex].description}
              </p>
            </div>
            
            {/* Thumbnail Navigation */}
            <div className="grid grid-cols-4 gap-1 md:gap-2">
              {images.map((image, index) => (
                <div 
                  key={image.id}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`cursor-pointer p-1 border-2 rounded ${
                    index === currentImageIndex ? 'border-indigo-500' : 'border-transparent'
                  }`}
                >
                  <img 
                    src={image.src} 
                    alt={image.title}
                    className="h-12 md:h-16 w-full object-cover rounded"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}