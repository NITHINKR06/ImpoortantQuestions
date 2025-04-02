'use client'
import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import image1 from '@/app/images/sepm/Sequence.png';
import image2 from '@/app/images/sepm/Activity.png';
import image3 from '@/app/images/sepm/State.png';
import image4 from '@/app/images/sepm/UseCase.png';
import image5 from '@/app/images/sepm/Test.png';
import image6 from '@/app/images/sepm/Extreme.png';
import image7 from '@/app/images/sepm/Extreme.png';
import Image from 'next/image';

export default function ImageGallery() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeImg, setActiveImg] = useState(null);
  const [activeText, setActiveText] = useState('');

  const images = [
    { src: image1, desc: 'Sequence diagram for Transfer Data' },
    { src: image2, desc: 'An activity model of the insulin pump operation' },
    { src: image3, desc: 'Weather station state diagram ' },
    { src: image4, desc: 'Weather station use cases ' },
    { src: image5, desc: 'Test driven development  ' },
    { src: image6, desc: 'Extreme programming ' },
    { src: '', desc: ' If there is any, DM that image to the class group.' },
  ];

  // Pass the entire image object to openModal
  const openModal = (img) => {
    setActiveImg(img.src);
    setActiveText(img.desc);
    setIsOpen(true);
  };

  const closeModal = () => {
    setActiveImg(null);
    setActiveText('');
    setIsOpen(false);
  };

  return (
    <div className="px-4 py-6">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {images.map((img, index) => (
          <div key={index} className="w-full">
            {/* Image Container */}
            <div
              className="relative aspect-square cursor-pointer hover:scale-105 transition-transform duration-300 overflow-hidden rounded-lg shadow-md"
              onClick={() => openModal(img)}
            >
              <Image
                src={img.src}
                alt={`Gallery ${index}`}
                className="w-full h-full object-cover rounded-lg"
                placeholder="blur"
                sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 25vw"
              />
            </div>
            {/* Description */}
            <p className="mt-2 text-center text-gray-950 bg-gray-300 font-semibold p-2 rounded-xl">
              {img.desc}
            </p>
          </div>
        ))}
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center backdrop-blur-lg p-4"
          onClick={closeModal}
        >
          <button
            onClick={closeModal}
            className="fixed top-4 right-4 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition"
          >
            <FaTimes size={20} />
          </button>

          <div
            className="relative max-h-[90vh] max-w-[80vw] sm:max-w-[70vw] overflow-auto bg-white rounded-xl p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={activeImg}
              alt="Enlarged"
              className="rounded-xl w-fit"
              placeholder="blur"
            />
            {activeText && (
              <p className="mt-4 text-center text-gray-800 font-medium">
                {activeText}
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
