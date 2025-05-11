import React, { useState, useEffect } from 'react';
import { File, ChevronLeft, ChevronRight, Maximize, Minimize, Download, Menu, X } from 'lucide-react';

export default function Imp1() {
  const pdfPath = "/DAA_UNIT_5.pdf";
  const pdfPath1 = "/Bellman_Ford.pdf";

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

  const [pdfFullscreen, setPdfFullscreen] = useState(false);
  const [pdfFullscreen1, setPdfFullscreen1] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

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

  const handleDownloadPDF = (href, filename) => {
    const link = document.createElement('a');
    link.href = href;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="bg-gray-50">
      <div className="max-w-6xl mx-auto p-4 md:p-6">
        {/* PDF Viewer Section 1 */}
        <div 
          id="pdf-section" 
          className={`bg-black rounded-lg shadow-md mb-6 overflow-hidden ${pdfFullscreen ? 'fixed inset-0 z-50 p-4' : ''}`}
        >
          <div className="flex items-center justify-between p-3 md:p-4 bg-gray-300 text-black">
            <div className="flex items-center">
              <File className="mr-2" size={isMobile ? 18 : 20} />
              <h2 className="text-lg md:text-xl font-semibold">DAA Unit 3 Part 1</h2>
            </div>
            <div className="flex items-center space-x-1 md:space-x-2">
              <button 
                className="p-1 md:p-2 hover:bg-gray-700 rounded-full"
                onClick={() => setPdfFullscreen(!pdfFullscreen)}
                aria-label={pdfFullscreen ? "Exit fullscreen" : "Enter fullscreen"}
              >
                {pdfFullscreen ? <Minimize size={isMobile ? 18 : 20} /> : <Maximize size={isMobile ? 18 : 20} />}
              </button>
              <button 
                className="p-1 md:p-2 hover:bg-gray-700 rounded-full"
                onClick={() => handleDownloadPDF(pdfPath1, "Bellman_Ford.pdf")}
                aria-label="Download PDF"
              >
                <Download size={isMobile ? 18 : 20} />
              </button>
            </div>
          </div>

          <div className={`bg-gray-100 ${pdfFullscreen ? 'h-full' : 'h-64 md:h-96'} relative`}>
            <iframe 
              src={pdfPath1} 
              title="Bellman Ford PDF"
              className="w-full h-full"
            />
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto p-4 md:p-6">
        {/* PDF Viewer Section 2 */}
        <div 
          id="pdf-section" 
          className={`bg-black rounded-lg shadow-md mb-6 overflow-hidden ${pdfFullscreen1 ? 'fixed inset-0 z-50 p-4' : ''}`}
        >
          <div className="flex items-center justify-between p-3 md:p-4 bg-gray-300 text-black">
            <div className="flex items-center">
              <File className="mr-2" size={isMobile ? 18 : 20} />
              <h2 className="text-lg md:text-xl font-semibold">DAA Unit 3 Part 2</h2>
            </div>
            <div className="flex items-center space-x-1 md:space-x-2">
              <button 
                className="p-1 md:p-2 hover:bg-gray-700 rounded-full"
                onClick={() => setPdfFullscreen1(!pdfFullscreen1)}
                aria-label={pdfFullscreen1 ? "Exit fullscreen" : "Enter fullscreen"}
              >
                {pdfFullscreen1 ? <Minimize size={isMobile ? 18 : 20} /> : <Maximize size={isMobile ? 18 : 20} />}
              </button>
              <button 
                className="p-1 md:p-2 hover:bg-gray-700 rounded-full"
                onClick={() => handleDownloadPDF(pdfPath, "DAA_UNIT_5.pdf")}
                aria-label="Download PDF"
              >
                <Download size={isMobile ? 18 : 20} />
              </button>
            </div>
          </div>

          <div className={`bg-gray-100 ${pdfFullscreen1 ? 'h-full' : 'h-64 md:h-96'} relative`}>
            <iframe 
              src={pdfPath} 
              title="DAA Unit 5 PDF"
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
