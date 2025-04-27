import React, { useState } from 'react';
import Image from 'next/image';
import { FaTimes } from 'react-icons/fa';
import BFS from '../../images/daa/daa1/BFS.jpg';

export default function Imp2() {
  // Helper function to ensure YouTube URL is in embed format
  const getEmbedUrl = (url) => {
    // If URL is already in embed format, return it directly (and remove any query parameters)
    if (url.includes('embed')) {
      return url.split('?')[0];
    }
    // If URL is in shortened format, convert it
    if (url.includes('youtu.be')) {
      const videoId = url.split('/').pop().split('?')[0];
      return `https://www.youtube.com/embed/${videoId}`;
    }
    // If URL is a standard YouTube watch URL
    if (url.includes('watch')) {
      const urlObj = new URL(url);
      const videoId = urlObj.searchParams.get('v');
      return `https://www.youtube.com/embed/${videoId}`;
    }
    return url; // Default to returning the original URL if none of the conditions match
  };

  // Define gallery images with description and associated YouTube video link
  const images = [
    { 
      src: BFS, 
      alt: '', 
      desc: '',
      youtube: '' // Ensure this ID is valid
    },

    // Add more images as needed
  ];

  const [selectedImage, setSelectedImage] = useState(null);

  // Function to close the modal
  const closeModal = () => setSelectedImage(null);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Gallery</h1>
      {/* Masonry-like multi-column layout */}
      <div className="columns-1 sm:columns-2 md:columns-3 gap-6">
        {images.map((image, index) => (
          <div
            key={index}
            className="cursor-pointer inline-block w-full mb-6 transition-transform duration-200 hover:scale-105"
            onClick={() => setSelectedImage(image)}
          >
            <Image
              src={image.src}
              alt={image.alt}
              className="h-auto object-cover rounded-lg shadow-md"
            />
            <p className="mt-2 text-center text-gray-950 bg-gray-300 font-semibold p-2 rounded-xl">
              {image.desc}
            </p>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-[rgba(0,0,0,0.3)] backdrop-blur-md flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <div
            className="bg-white rounded-lg overflow-auto shadow-xl max-w-3xl max-h-[90vh] mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="w-full h-auto object-contain max-h-[80vh]"
              />
              <button
                className="absolute top-2 right-2 text-white bg-gray-800 rounded-full p-2 hover:bg-gray-700"
                onClick={closeModal}
              >
                <FaTimes size={20} />
              </button>
            </div>
            <div className="p-4">
              <p className="text-center text-gray-800 mb-4">{selectedImage.desc}</p>
              {/* Render YouTube video if available */}
              {selectedImage.youtube && (
                <div className="relative" style={{ paddingBottom: '56.25%', height: 0 }}>
                  <iframe
                    src={getEmbedUrl(selectedImage.youtube)}
                    title={selectedImage.alt}
                    // frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute top-0 left-0 w-full h-full"
                  ></iframe>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
