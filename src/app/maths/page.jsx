'use client'
import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';

// Set up pdfjs worker (required for react-pdf)
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export default function Maths() {
  // Convert your Google Drive URL into a direct link by extracting the file ID.
  const googleDrivePdfUrl = `https://drive.google.com/uc?export=view&id=1jYWVGwy5mDdSbgd6QnagreJmlsMKatCy`;

  // Files list – adjust or add files as needed.
  const files = [
    { id: 1, type: 'pdf', name: 'Google Drive PDF', url: googleDrivePdfUrl },
    { id: 2, type: 'pptx', name: 'Sample Presentation', url: '/files/sample.pptx' },
    { id: 3, type: 'image', name: 'Sample Image', url: '/files/sample.jpg' },
  ];

  const [modalOpen, setModalOpen] = useState(false);
  const [currentFile, setCurrentFile] = useState(null);
  const [numPages, setNumPages] = useState(null);

  const openFile = (file) => {
    setCurrentFile(file);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setCurrentFile(null);
    setNumPages(null);
  };

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-semibold mb-6 text-center">File Viewer</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {files.map((file) => (
          <div
            key={file.id}
            onClick={() => openFile(file)}
            className="bg-white shadow-md rounded-lg p-6 cursor-pointer hover:shadow-xl transition-shadow"
          >
            <div className="flex flex-col items-center">
              <div className="mb-4">
                {file.type === 'pdf' && (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-3-3v6m-9 4h18a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                )}
                {file.type === 'pptx' && (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M8 13h10m-9 4h10M3 21h18a2 2 0 002-2v-5H1v5a2 2 0 002 2z" />
                  </svg>
                )}
                {file.type === 'image' && (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h18M3 19h18M4 5v14m16-14v14" />
                  </svg>
                )}
              </div>
              <div className="text-xl font-medium">{file.name}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal for viewing file content */}
      {modalOpen && currentFile && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
          <div className="bg-white rounded-lg overflow-hidden shadow-2xl max-w-4xl w-full relative">
            <button
              onClick={closeModal}
              className="absolute top-3 right-3 text-gray-600 hover:text-gray-800 text-3xl font-bold focus:outline-none"
            >
              &times;
            </button>
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-4 text-center">{currentFile.name}</h2>
              <div className="w-full h-[500px] overflow-auto">
                {currentFile.type === 'image' && (
                  <img
                    src={currentFile.url}
                    alt={currentFile.name}
                    className="w-full h-full object-contain rounded"
                  />
                )}
                {currentFile.type === 'pdf' && (
                  <div className="flex flex-col items-center">
                    <Document
                      file={currentFile.url}
                      onLoadSuccess={onDocumentLoadSuccess}
                      className="shadow-lg rounded"
                    >
                      {Array.from(new Array(numPages), (el, index) => (
                        <Page key={`page_${index + 1}`} pageNumber={index + 1} />
                      ))}
                    </Document>
                  </div>
                )}
                {currentFile.type === 'pptx' && (
                  <iframe
                    src={`https://view.officeapps.live.com/op/embed.aspx?src=${encodeURIComponent(
                      window.location.origin + currentFile.url
                    )}`}
                    title={currentFile.name}
                    className="w-full h-full rounded"
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
