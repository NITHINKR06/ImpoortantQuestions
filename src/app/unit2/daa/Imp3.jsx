import React, { useState } from 'react';

import img1 from '@/app/images/daa/1daa1/2-3 tree construction.jpg'
import img2 from '@/app/images/daa/1daa1/AVL tree construction.jpg'
import img3 from '@/app/images/daa/1daa1/BFS Traversal on Graph.jpg'    
import img4 from '@/app/images/daa/1daa1/Decrease (by half) and conquer.jpg'
import img5 from '@/app/images/daa/1daa1/Decrease(by one) and conquer flowchart.jpg'
import img6 from '@/app/images/daa/1daa1/DFS traversal on graph.jpg'
import img7 from '@/app/images/daa/1daa1/Diff between DFS and BFS.jpg'
import img8 from '@/app/images/daa/1daa1/Example 2.jpg'
import img9 from '@/app/images/daa/1daa1/Heap construction.jpg'
import img10 from '@/app/images/daa/1daa1/Insertion sort solving.jpg'
import img11 from '@/app/images/daa/1daa1/Sorting the elements by Heapsort technique.jpg'
import img12 from '@/app/images/daa/1daa1/String match using Horspool.jpg'
import Image from 'next/image';

export default function AlgorithmGallery() {
  const [selectedAlgorithm, setSelectedAlgorithm] = useState(null);

  const algorithms = [
    {
      image: img1,
      title: "2-3 Tree Construction",
      description: "Visualization of 2-3 tree construction process...",
      videoUrl: "https://www.youtube.com/embed/TOb1tuEZ2X4",
      category: "Tree Structures"
    },
    {
      image: img2,
      title: "AVL Tree Construction",
      description: "Step-by-step construction of an AVL tree...",
      videoUrl: "https://www.youtube.com/embed/jDM6_TnYIqE",
      category: "Tree Structures"
    },
    {
      image: img3,
      title: "BFS Traversal on Graph",
      description: "Breadth-First Search traversal illustrated on a graph...",
      videoUrl: "https://www.youtube.com/embed/oDqjPvD54Ss",
      category: "Graph Traversals"
    },
    {
      image: img4,
      title: "Decrease (by half) and Conquer",
      description: "Illustration of the decrease-by-half and conquer paradigm...",
      videoUrl: "https://www.youtube.com/embed/0oJyNrEVre0",
      category: "Algorithm Paradigms"
    },
    {
      image: img5,
      title: "Decrease (by one) and Conquer Flowchart",
      description: "Flowchart representation of decrease-by-one and conquer...",
      videoUrl: "https://www.youtube.com/embed/JU767SDMDvA",
      category: "Algorithm Paradigms"
    },
    {
      image: img6,
      title: "DFS Traversal on Graph",
      description: "Depth-First Search traversal visualized on a graph...",
      videoUrl: "https://www.youtube.com/embed/7fujbpJ0LB4",
      category: "Graph Traversals"
    },
    {
      image: img7,
      title: "Difference between DFS and BFS",
      description: "Comparative visualization highlighting DFS vs BFS...",
      videoUrl: "https://www.youtube.com/embed/62IcXF_OF3k",
      category: "Graph Traversals"
    },
    {
      image: img8,
      title: "DFS Traversal Example",
      description: "Another example of DFS showing step-by-step exploration...",
      videoUrl: "https://www.youtube.com/embed/7fujbpJ0LB4",
      category: "Graph Traversals"
    },
    {
      image: img9,
      title: "Heap Construction",
      description: "Demonstration of heap data structure construction...",
      videoUrl: "https://www.youtube.com/embed/HqPJF2L5h9U",
      category: "Tree Structures"
    },
    {
      image: img10,
      title: "Insertion Sort Process",
      description: "Step-by-step execution of insertion sort...",
      videoUrl: "https://www.youtube.com/embed/OGzPmgsI-pQ",
      category: "Sorting Algorithms"
    },
    {
      image: img11,
      title: "Heapsort Technique",
      description: "Illustration of heapsort algorithm using heap...",
      videoUrl: "https://www.youtube.com/embed/2DmK_H7IdTo",
      category: "Sorting Algorithms"
    },
    {
      image: img12,
      title: "String Matching using Horspool",
      description: "Visualization of Horspool's algorithm...",
      videoUrl: "https://www.youtube.com/embed/QDZpzctPf10",
      category: "String Algorithms"
    }
  ];

  const categories = {};
  algorithms.forEach(algo => {
    if (!categories[algo.category]) categories[algo.category] = [];
    categories[algo.category].push(algo);
  });

  const Modal = ({ algorithm, onClose }) => {
    if (!algorithm) return null;
    const [showVideo, setShowVideo] = useState(false);

    return (
      <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center p-4 z-50">
        <div className="bg-white rounded-lg max-w-4xl w-full max-h-screen overflow-auto">
          <div className="p-4 border-b">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-bold">{algorithm.title}</h2>
              <button 
                onClick={onClose}
                className="text-gray-500 hover:text-gray-700 font-bold text-xl"
              >
                ×
              </button>
            </div>
          </div>
          <div className="p-4">
            <div className="tabs flex border-b mb-4">
              <button 
                className={`px-4 py-2 font-medium ${!showVideo ? 'border-b-2 border-blue-500 text-blue-600' : 'text-gray-500'}`}
                onClick={() => setShowVideo(false)}
              >
                Image
              </button>
              <button 
                className={`px-4 py-2 font-medium ${showVideo ? 'border-b-2 border-blue-500 text-blue-600' : 'text-gray-500'}`}
                onClick={() => setShowVideo(true)}
              >
                Video Tutorial
              </button>
            </div>

            {!showVideo ? (
              <Image 
                src={algorithm.image} 
                alt={algorithm.title} 
                className="w-full object-contain max-h-96"
              />
            ) : (
              <div className="aspect-w-16 aspect-h-9">
                <iframe 
                  className="w-full h-96" 
                  src={algorithm.videoUrl}
                  title={`${algorithm.title} video tutorial`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            )}

            <div className="mt-4">
              <h3 className="font-semibold text-lg mb-2">About this algorithm:</h3>
              <p className="text-gray-700">{algorithm.description}</p>
              <div className="mt-2">
                <span className="inline-block bg-blue-100 text-blue-800 text-sm font-medium px-2.5 py-0.5 rounded">
                  {algorithm.category}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const AlgorithmCard = ({ algorithm }) => {
    return (
      <div 
        className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg hover:scale-105 cursor-pointer"
        onClick={() => setSelectedAlgorithm(algorithm)}
      >
        <div className="h-48 overflow-hidden relative group">
          <Image
            src={algorithm.image} 
            alt={algorithm.title} 
            className="w-full h-full object-cover"
          />
          {/* <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 flex items-center justify-center transition-all duration-300">
            <div className="bg-blue-600 text-white px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 flex items-center">
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Video Available
            </div>
          </div> */}
        </div>
        <div className="p-4">
          <h3 className="font-bold text-lg mb-2 text-blue-800">{algorithm.title}</h3>
          <p className="text-gray-600 text-sm line-clamp-2">{algorithm.description}</p>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        <div className="space-y-16">
          {Object.entries(categories).map(([category, items]) => (
            <div key={category} className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-800 border-b-2 border-blue-500 pb-2">{category}</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {items.map((algorithm) => (
                  <AlgorithmCard key={algorithm.title} algorithm={algorithm}  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedAlgorithm && (
        <Modal 
          algorithm={selectedAlgorithm}
          onClose={() => setSelectedAlgorithm(null)}
        />
      )}
    </div>
  );
}
