'use client';
import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import { FaFilePdf, FaFilePowerpoint, FaFileImage, FaTimes } from 'react-icons/fa';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export default function FileViewer() {
  const files = [
    { id: 1, type: 'pdf', name: 'Algorithm Notes', url: 'https://drive.google.com/uc?export=view&id=1jYWVGwy5mDdSbgd6QnagreJmlsMKatCy' },
    { id: 2, type: 'pptx', name: 'Data Structures', url: '/files/sample.pptx' },
    { id: 3, type: 'image', name: 'Graph Theory', url: '/files/sample.jpg' },
  ];

  const [selectedFile, setSelectedFile] = useState(null);
  const [numPages, setNumPages] = useState(null);

  const openFile = (file) => {
    setSelectedFile(file);
  };

  const closeFile = () => {
    setSelectedFile(null);
    setNumPages(null);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-semibold text-center mb-6">File Viewer</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {files.map((file) => (
          <div
            key={file.id}
            onClick={() => openFile(file)}
            className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md cursor-pointer hover:shadow-lg transition"
          >
            {file.type === 'pdf' && <FaFilePdf className="text-red-500 text-5xl mb-4" />}
            {file.type === 'pptx' && <FaFilePowerpoint className="text-orange-500 text-5xl mb-4" />}
            {file.type === 'image' && <FaFileImage className="text-green-500 text-5xl mb-4" />}
            <p className="text-lg font-medium">{file.name}</p>
          </div>
        ))}
      </div>

      {selectedFile && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl max-w-4xl w-full p-6 relative">
            <button onClick={closeFile} className="absolute top-3 right-3 text-gray-600 hover:text-gray-800 text-2xl">
              <FaTimes />
            </button>
            <h2 className="text-xl font-bold text-center mb-4">{selectedFile.name}</h2>
            <div className="overflow-auto max-h-[500px] p-2 border rounded-lg">
              {selectedFile.type === 'image' && (
                <img src={selectedFile.url} alt={selectedFile.name} className="w-full rounded" />
              )}
              {selectedFile.type === 'pdf' && (
                <Document file={selectedFile.url} onLoadSuccess={({ numPages }) => setNumPages(numPages)}>
                  {Array.from(new Array(numPages), (el, index) => (
                    <Page key={`page_${index + 1}`} pageNumber={index + 1} className="mb-2 shadow" />
                  ))}
                </Document>
              )}
              {selectedFile.type === 'pptx' && (
                <iframe
                  src={`https://view.officeapps.live.com/op/embed.aspx?src=${encodeURIComponent(window.location.origin + selectedFile.url)}`}
                  title={selectedFile.name}
                  className="w-full h-[500px] rounded"
                />
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
