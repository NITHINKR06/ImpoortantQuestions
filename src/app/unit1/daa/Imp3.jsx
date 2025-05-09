"use client";

import React, { useState, useEffect } from "react";
import { File, Maximize, Minimize, Download } from "lucide-react";

export default function Daa({ searchQuery = "" }) {
  const pdfPath = "/DAS imp .pdf";

  const [fullscreen1, setFullscreen1] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);
    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  const handleDownloadPDF = (path) => {
    const link = document.createElement("a");
    link.href = path;
    link.download = "";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const renderPDFViewer = (title, path, isFullscreen, toggleFullscreen) => (
    <div
      id="pdf-section"
      className={`bg-black rounded-lg shadow-md mb-6 overflow-hidden ${isFullscreen ? "fixed inset-0 z-50 p-4" : ""}`}
    >
      <div className="flex items-center justify-between p-3 md:p-4 bg-gray-300 text-black">
        <div className="flex items-center">
          <File className="mr-2" size={isMobile ? 18 : 20} />
          <h2 className="text-lg md:text-xl font-semibold">{title}</h2>
        </div>
        <div className="flex items-center space-x-1 md:space-x-2">
          <button
            className="p-1 md:p-2 hover:bg-gray-700 rounded-full"
            onClick={toggleFullscreen}
            aria-label={isFullscreen ? "Exit fullscreen" : "Enter fullscreen"}
          >
            {isFullscreen ? <Minimize size={isMobile ? 18 : 20} /> : <Maximize size={isMobile ? 18 : 20} />}
          </button>
          <button
            className="p-1 md:p-2 hover:bg-gray-700 rounded-full"
            onClick={() => handleDownloadPDF(path)}
            aria-label="Download PDF"
          >
            <Download size={isMobile ? 18 : 20} />
          </button>
        </div>
      </div>

      <div className={`bg-gray-100 ${isFullscreen ? "h-full" : "h-64 md:h-96"} relative`}>
        <iframe src={path} title={title} className="w-full h-full" />
      </div>
    </div>
  );

  return (
    <main className="container mx-auto px-4 py-8 space-y-12">
      <div className="max-w-6xl mx-auto p-4 md:p-6">
        {renderPDFViewer("DAA ", pdfPath, fullscreen1, () => setFullscreen1(!fullscreen1))}
      </div>
    </main>
  );
}
