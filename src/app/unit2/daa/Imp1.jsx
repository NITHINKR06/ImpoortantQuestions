import InsertionSortVisualizer from '@/components/Visualization/IS';
import React from 'react';

// Reusable Section component defined locally
const Section = ({ title, content }) => {
  return (
    <section className="bg-white rounded-xl shadow-xl p-6 md:p-8">
      <h2 className="text-3xl font-bold text-indigo-800 mb-4">{title}</h2>
      <div className="text-gray-800 text-base md:text-lg">{content}</div>
    </section>
  );
};

// ImageWithDescription component
const ImageWithDescription = ({ imageUrl, alt, description }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img 
        src={imageUrl || "/api/placeholder/600/400"} 
        alt={alt || "Image description"} 
        className="w-full h-64 object-cover"
      />
      <div className="p-4">
        <p className="text-gray-700">{description}</p>
      </div>
    </div>
  );
};

// Enhanced QandA component with bullet points support
const QandA = ({ question, answer, bulletPoints }) => {
  return (
    <div className="bg-gray-50 rounded-lg p-4 mb-4">
      <h3 className="font-bold text-lg text-indigo-700 mb-2">{question}</h3>
      <p className="text-gray-700 mb-2">{answer}</p>
      
      {/* Display bullet points if provided */}
      {bulletPoints && bulletPoints.length > 0 && (
        <ul className="list-disc pl-5 space-y-1 text-gray-700">
          {bulletPoints.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default function Daa({ searchQuery = "" }) {
  // Sample data - replace with your actual content
  const imagesData = [
    {
      imageUrl: "/api/placeholder/600/400",
      alt: "First image description",
      description: "This is the description for the first image. It provides context and details about what's shown in the image."
    },
  ];

  // Enhanced qaData with bullet points
  const qaData = [
    {
      question: "What is the main purpose of this section?",
      answer: "The main purpose is to provide information through visual content along with explanatory text and address common questions.",
      bulletPoints: [
        "To clearly present complex information visually",
        "To provide detailed explanations for each image",
        "To answer frequently asked questions about the content",
        "To improve understanding through multiple formats"
      ]
    },
  ];

  // Filter imagesData based on searchQuery
  const filteredImages = imagesData.filter(item =>
    item.alt.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Filter qaData based on searchQuery
  const filteredQA = qaData.filter(item =>
    item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
    (item.bulletPoints && item.bulletPoints.some(point => point.toLowerCase().includes(searchQuery.toLowerCase())))
  );

  return (
    <main className="container mx-auto px-4 py-8 space-y-12">
      {/* Introduction Section */}
      <Section 
        title="Image Gallery with Descriptions" 
        content={
          <p>Below you'll find a collection of images with detailed descriptions to help you understand the content better.</p>
        } 
      />
      
      {/* Images with Descriptions */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredImages.map((item, index) => (
          <ImageWithDescription
            key={index}
            imageUrl={item.imageUrl}
            alt={item.alt}
            description={item.description}
          />
        ))}
      </div>
      
      {/* Q&A Section with bullet points */}
      <Section 
        title="Frequently Asked Questions" 
        content={
          <div className="space-y-4">
            {filteredQA.map((item, index) => (
              <QandA 
                key={index}
                question={item.question}
                answer={item.answer}
                bulletPoints={item.bulletPoints}
              />
            ))}
          </div>
        } 
      />

      <InsertionSortVisualizer/>

    </main>
  );
}
