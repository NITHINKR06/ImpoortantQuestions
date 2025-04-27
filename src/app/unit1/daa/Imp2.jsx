'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { FaTimes, FaYoutube, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

// Import your images
import SS from '@/app/images/daa/1daa/SS.jpg';
import BS from '@/app/images/daa/1daa/BS.jpg';
import SquS from '@/app/images/daa/1daa/SquS.jpg';
import BFSM from '@/app/images/daa/1daa/BFSM.jpg';
import QS from '@/app/images/daa/1daa/QS.jpg';
import QS2 from '@/app/images/daa/1daa/QS2.jpg';
import BIS from '@/app/images/daa/1daa/BIS.jpg';
import MM from '@/app/images/daa/1daa/MM.jpg';
import MS1 from '@/app/images/daa/1daa/MS1.jpg';
import MS2 from '@/app/images/daa/1daa/MS2.jpg';
import Th from '@/app/images/daa/1daa/Th.jpg';
import ME from '@/app/images/daa/1daa/ME.jpg';
import UE from '@/app/images/daa/1daa/UE.jpg';
import MXM from '@/app/images/daa/1daa/MXM.jpg';
import BD from '@/app/images/daa/1daa/BD.jpg';

export default function Imp2() {
  // Function to convert regular YouTube URLs to embed URLs
  const getEmbedUrl = (url) => {
    if (url.includes('embed')) return url.split('?')[0];
    if (url.includes('youtu.be')) {
      const videoId = url.split('/').pop().split('?')[0];
      return `https://www.youtube.com/embed/${videoId}`;
    }
    if (url.includes('watch')) {
      const urlObj = new URL(url);
      const videoId = urlObj.searchParams.get('v');
      return `https://www.youtube.com/embed/${videoId}`;
    }
    return url;
  };

  // Organize algorithms by category for better structure
  const algorithmCategories = [
    {
      name: "Sorting Algorithms",
      algorithms: [
        {
          src: [SS],
          alt: 'Selection Sort',
          desc: 'Selection sort algorithm in action',
          youtube: 'https://www.youtube.com/embed/GUDLRan2DWM'
        },
        {
          src: [BS],
          alt: 'Bubble Sort',
          desc: 'Bubble sort algorithm in action',
          youtube: 'https://www.youtube.com/embed/xli_FI7CuzA'
        },
        {
          src: [MS1, MS2],
          alt: 'Merge Sort',
          desc: 'Merge sort algorithm in action',
          youtube: 'https://www.youtube.com/embed/TzeBrDU-JaY'
        },
        {
          src: [QS, QS2],
          alt: 'Quick Sort',
          desc: 'Quick sort algorithm in action',
          youtube: 'https://www.youtube.com/embed/Hoixgm4-P4M'
        },
      ]
    },
    {
      name: "Searching Algorithms",
      algorithms: [
        {
          src: [SquS],
          alt: 'Sequential Search',
          desc: 'Sequential search algorithm in action',
          youtube: 'https://www.youtube.com/embed/tQu3kV_eHlM'
        },
        {
          src: [BIS],
          alt: 'Binary Search',
          desc: 'Binary search algorithm in action',
          youtube: 'https://www.youtube.com/embed/fDKIpRe8GW4'
        },
      ]
    },
    {
      name: "String and Pattern Matching",
      algorithms: [
        {
          src: [BFSM],
          alt: 'Brute Force String Matching',
          desc: 'String matching using brute force technique',
          youtube: 'https://www.youtube.com/embed/pLf1jAf7wnI'
        },
      ]
    },
    {
      name: "Mathematical Algorithms",
      algorithms: [
        {
          src: [MM],
          alt: 'Master Method',
          desc: 'Master method for solving recurrences',
          youtube: 'https://www.youtube.com/embed/d-gIGFxewW4'
        },
        {
          src: [Th],
          alt: 'Important Theorems',
          desc: 'Key theorems for algorithm analysis',
          youtube: 'https://www.youtube.com/embed/b5Ra-m-5yZg'
        },
        {
          src: [MXM],
          alt: 'Matrix Multiplication',
          desc: 'Matrix multiplication algorithm',
          youtube: 'https://www.youtube.com/embed/UG530eh8q4A'
        },
        {
          src: [BD],
          alt: 'Binary Operations',
          desc: 'Decimal-to-binary conversion algorithm',
          youtube: 'https://www.youtube.com/embed/XM-aojYQCtQ'
        },
      ]
    },
    {
      name: "Array Operations",
      algorithms: [
        {
          src: [ME],
          alt: 'Maximum Element',
          desc: 'Finding the maximum element in an array',
          youtube: 'https://www.youtube.com/embed/y1bUfuTkmic'
        },
        {
          src: [UE],
          alt: 'Unique Element',
          desc: 'Finding the unique element in an array',
          youtube: 'https://www.youtube.com/embed/5LGMGK3WUyQ'
        },
      ]
    },
  ];
  

  const [selectedImage, setSelectedImage] = useState(null);
  const [activeTab, setActiveTab] = useState(0); // For modal tabs (image/video)
  const [currentImageIndex, setCurrentImageIndex] = useState(0); // Track current image

  const closeModal = () => {
    setSelectedImage(null);
    setActiveTab(0);
    setCurrentImageIndex(0);
  }

  const nextImage = (e) => {
    e.stopPropagation();
    if (selectedImage && currentImageIndex < selectedImage.src.length - 1) {
      setCurrentImageIndex(currentImageIndex + 1);
    }
  }

  const prevImage = (e) => {
    e.stopPropagation();
    if (selectedImage && currentImageIndex > 0) {
      setCurrentImageIndex(currentImageIndex - 1);
    }
  }

  return (
    <div className="container mx-auto px-4 py-8 bg-gray-50">
      <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">Algorithm Gallery</h1>
      
      {/* Categories */}
      {algorithmCategories.map((category, categoryIndex) => (
        <div key={categoryIndex} className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 pl-2 border-l-4 border-blue-500 text-gray-700">
            {category.name}
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {category.algorithms.map((algorithm, algorithmIndex) => (
              <div
                key={algorithmIndex}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div 
                  className="relative overflow-hidden cursor-pointer group"
                  onClick={() => {
                    setSelectedImage(algorithm);
                    setCurrentImageIndex(0);
                  }}
                >
                  <div className="aspect-w-16 aspect-h-9 bg-gray-200">
                    <Image
                      src={algorithm.src[0]}
                      alt={algorithm.alt}
                      className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  
                  {/* Indicator for multiple images */}
                  {algorithm.src.length > 1 && (
                    <span className="absolute top-2 right-2 bg-blue-500 text-white text-xs px-2 py-1 rounded-full">
                      {algorithm.src.length} images
                    </span>
                  )}
                  
                  {/* Video indicator */}
                  {algorithm.youtube && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <FaYoutube className="text-red-500 text-5xl" />
                    </div>
                  )}
                </div>
                
                <div className="p-4">
                  <h3 className="font-bold text-gray-800">{algorithm.alt}</h3>
                  <p className="text-gray-600 text-sm mt-1">{algorithm.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* Modal with more transparent backdrop and increased blur */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-opacity-30 backdrop-blur-md flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <div
            className="bg-white rounded-lg shadow-2xl max-w-4xl w-full max-h-[90vh] mx-4 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="bg-gray-100 px-6 py-4 flex items-center justify-between border-b">
              <h3 className="text-xl font-semibold text-gray-800">{selectedImage.alt}</h3>
              <button
                className="text-gray-500 hover:text-gray-700 focus:outline-none"
                onClick={closeModal}
              >
                <FaTimes size={24} />
              </button>
            </div>
            
            {/* Modal Tabs (if has both images and video) */}
            {selectedImage.youtube && selectedImage.src.length > 0 && (
              <div className="flex border-b">
                <button 
                  className={`px-6 py-3 font-medium ${activeTab === 0 ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'}`}
                  onClick={() => setActiveTab(0)}
                >
                  Images
                </button>
                <button 
                  className={`px-6 py-3 font-medium ${activeTab === 1 ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'}`}
                  onClick={() => setActiveTab(1)}
                >
                  Video
                </button>
              </div>
            )}
            
            {/* Modal Content */}
            <div className="overflow-auto p-6">
              {/* Images with navigation */}
              {(activeTab === 0 || !selectedImage.youtube) && (
                <div className="relative">
                  {/* Current image */}
                  <div className="flex justify-center">
                    <Image
                      src={selectedImage.src[currentImageIndex]}
                      alt={`${selectedImage.alt} - ${currentImageIndex + 1}`}
                      className="max-h-[60vh] w-auto object-contain rounded"
                    />
                  </div>
                  
                  {/* Image navigation arrows */}
                  {selectedImage.src.length > 1 && (
                    <>
                      {/* Image counter */}
                      <div className="absolute bottom-4 left-0 right-0 text-center">
                        <span className="bg-black bg-opacity-50 text-white px-3 py-1 rounded-full text-sm">
                          {currentImageIndex + 1} / {selectedImage.src.length}
                        </span>
                      </div>
                      
                      {/* Previous button */}
                      {currentImageIndex > 0 && (
                        <button 
                          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-r-lg"
                          onClick={prevImage}
                        >
                          <FaChevronLeft size={24} />
                        </button>
                      )}
                      
                      {/* Next button */}
                      {currentImageIndex < selectedImage.src.length - 1 && (
                        <button 
                          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-l-lg"
                          onClick={nextImage}
                        >
                          <FaChevronRight size={24} />
                        </button>
                      )}
                    </>
                  )}
                </div>
              )}
              
              {/* Video */}
              {((activeTab === 1 && selectedImage.youtube) || (!selectedImage.src.length && selectedImage.youtube)) && (
                <div className="relative w-full" style={{ paddingTop: '56.25%' }}>
                  <iframe
                    src={getEmbedUrl(selectedImage.youtube)}
                    title={selectedImage.alt}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute top-0 left-0 w-full h-full rounded"
                  ></iframe>
                </div>
              )}
              
              {/* Description */}
              <div className="mt-6">
                <p className="text-gray-700">{selectedImage.desc}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}