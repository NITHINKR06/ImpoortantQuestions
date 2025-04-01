'use client'
import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
// Import your local images
import image1 from '@/app/images/fcn/NAT.png';
import image2 from '@/app/images/fcn/IPV6 Address.png';
import image3 from '@/app/images/fcn/Subnet Masks.png';
import Image from 'next/image';

export default function ImageGallery() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeImg, setActiveImg] = useState(null);

  const images = [image1, image2, image3];

  const openModal = (img) => {
    setActiveImg(img);
    setIsOpen(true);
  };

  const closeModal = () => {
    setActiveImg(null);
    setIsOpen(false);
  };

  return (
    <div className="p-4">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
        {images.map((img, index) => (
          <div
            key={index}
            className="relative cursor-pointer hover:scale-105 transition-transform duration-300 overflow-hidden rounded-lg shadow-md"
            onClick={() => openModal(img)}
          >
            <Image
              src={img}
              alt={`Gallery ${index}`}
              className="w-full h-full object-cover rounded-lg"
              placeholder="blur"
            />
          </div>
        ))}
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-lg"
          onClick={closeModal}
        >
          {/* Fixed close button */}
          <button
            onClick={closeModal}
            className="fixed top-4 right-4 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition"
          >
            <FaTimes size={20} />
          </button>
          
          <div
            className="relative max-h-[90vh] max-w-[70vw] sm:w-[100vw] overflow-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={activeImg}
              alt="Enlarged"
              className="rounded-xl"
              placeholder="blur"
            />
          </div>
        </div>
      )}
    </div>
  );
}
