import React, { useState } from 'react';
import Image from 'next/image';
import { FaTimes } from 'react-icons/fa';
import BFS from '../../images/daa/BFS.jpg';
import DFS from '../../images/daa/DFS.jpg';
import AVL from '../../images/daa/AVL.jpg';
import HEAPSORT from '../../images/daa/HEAPSORT.jpg';
import WARSHALLS from '../../images/daa/WARSHALLS.png';
import FLOYDS from '../../images/daa/FLOYDS.png';
import KNAPSACK from '../../images/daa/KNAPSACK.png';

export default function Imp2() {
  // Define gallery images with description
  const images = [
    { 
      src: BFS, 
      alt: 'BFS', 
      desc: 'This illustration shows the Breadth First Search algorithm in action.' 
    },
    { 
      src: DFS, 
      alt: 'DFS', 
      desc: 'This illustration shows the Depth First Search algorithm in action.' 
    },
    { 
      src: AVL, 
      alt: 'AVL', 
      desc: 'Construction of AVL tree' 
    },
    { 
      src: HEAPSORT, 
      alt: 'HeapSort', 
      desc: 'This illustration shows the heapsort algorithm in action.' 
    },
    { 
      src: WARSHALLS, 
      alt: 'WARSHALLS', 
      desc: 'This illustration shows the WARSHALLS algorithm in action.' 
    },
    { 
      src: FLOYDS, 
      alt: 'FLOYDS', 
      desc: 'This illustration shows the FLOYDS algorithm in action.' 
    },
    { 
      src: KNAPSACK, 
      alt: 'KNAPSACK', 
      desc: 'This illustration shows the KNAPSACK algorithm in action.' 
    },
    { 
      src: HORSPOOL, 
      alt: 'HORSPOOL', 
      desc: 'This illustration shows the HORSPOOL algorithm in action.' 
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
              <p className="text-center text-gray-800">{selectedImage.desc}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
