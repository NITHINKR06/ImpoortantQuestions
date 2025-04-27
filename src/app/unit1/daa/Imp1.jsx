import React, { useState, useEffect } from 'react';
import { File, ChevronLeft, ChevronRight, Maximize, Minimize, Download, Menu, X } from 'lucide-react';

// Reusable Section component defined locally
const Section = ({ title, content }) => {
  return (
    <section className="bg-white rounded-xl shadow-xl p-6 md:p-8">
      <h2 className="text-3xl font-bold text-indigo-800 mb-4">{title}</h2>
      <div className="text-gray-800 text-base md:text-lg">{content}</div>
    </section>
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
  // PDF file path
  const pdfPath = "/DAAimpUNIT1.pdf";

  // PDF viewer state
  const [pdfFullscreen, setPdfFullscreen] = useState(false);
  // Sample data - replace with your actual content
  // const imagesData = [
  //   {
  //     imageUrl: SS,
  //     alt: "Selection sort and Bubble sort algo",
  //     description: "  "
  //   },
  //   {
  //     imageUrl: "/api/placeholder/600/400",
  //     alt: "Second image description",
  //     description: "This is the description for the second image. It explains what this specific image represents."
  //   },
  //   {
  //     imageUrl: "/api/placeholder/600/400",
  //     alt: "Third image description",
  //     description: "This is the description for the third image. It contains information related to the visual content."
  //   }
  // ];

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
    {
      question: "How can I use these materials?",
      answer: "These materials can be used for educational purposes, reference, or to gain a better understanding of the presented topics.",
      bulletPoints: [
        "As a learning resource for students and educators",
        "For reference during related projects or research",
        "To share knowledge with colleagues or classmates",
        "As supplementary materials for presentations"
      ]
    },
    {
      question: "Where can I find more information?",
      answer: "Additional information can be found in the resources section or by contacting our support team.",
      bulletPoints: [
        "Check the Resources tab for downloadable PDFs",
        "Visit our documentation portal at docs.example.com",
        "Email support@example.com for specific questions",
        "Join our monthly webinars for advanced topics"
      ]
    }
  ];

    const [isMobile, setIsMobile] = useState(false);
    
    // Handle window resize
    useEffect(() => {
      const checkIfMobile = () => {
        setIsMobile(window.innerWidth < 768);
      };
      
      checkIfMobile();
      window.addEventListener('resize', checkIfMobile);
      
      return () => {
        window.removeEventListener('resize', checkIfMobile);
      };
    }, []);

  const handleDownloadPDF = () => {
    // Create an anchor element and set properties
    const link = document.createElement('a');
    link.href = pdfPath;
    link.download = "DAA_UNIT_5.pdf";
    // Append to the document
    document.body.appendChild(link);
    // Trigger the download
    link.click();
    // Clean up
    document.body.removeChild(link);
  };

  // Filter qaData based on searchQuery
  const filteredQA = qaData.filter(item =>
    item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
    (item.bulletPoints && item.bulletPoints.some(point => point.toLowerCase().includes(searchQuery.toLowerCase())))
  );

  return (
    <main className="container mx-auto px-4 py-8 space-y-12">

      <div className="max-w-6xl mx-auto p-4 md:p-6">
        {/* PDF Viewer Section */}
        <div 
          id="pdf-section" 
          className={`bg-black rounded-lg shadow-md mb-6 overflow-hidden ${pdfFullscreen ? 'fixed inset-0 z-50 p-4' : ''}`}
        >
          <div className="flex items-center justify-between p-3 md:p-4 bg-gray-300 text-black">
            <div className="flex items-center">
              <File className="mr-2" size={isMobile ? 18 : 20} />
              <h2 className="text-lg md:text-xl font-semibold">DAA Unit 1</h2>
            </div>
            <div className="flex items-center space-x-1 md:space-x-2">
              <button 
                className="p-1 md:p-2 hover:bg-gray-700 rounded-full"
                onClick={() => setPdfFullscreen(!pdfFullscreen)}
                aria-label={pdfFullscreen ? "Exit fullscreen" : "Enter fullscreen"}
              >
                {pdfFullscreen ? <Minimize size={isMobile ? 18 : 20} /> : <Maximize size={isMobile ? 18 : 20} />}
              </button>
              <button 
                className="p-1 md:p-2 hover:bg-gray-700 rounded-full"
                onClick={handleDownloadPDF}
                aria-label="Download PDF"
              >
                <Download size={isMobile ? 18 : 20} />
              </button>
            </div>
          </div>
          
          <div className={`bg-gray-100 ${pdfFullscreen ? 'h-full' : 'h-64 md:h-96'} relative`}>
            {/* This is where we'd implement the PDF viewer */}
            <iframe 
              src={pdfPath} 
              title="DAA Unit 5 PDF"
              className="w-full h-full"
            />
          </div>
        </div>
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
    </main>
  );
}


// ImageWithDescription component
// const ImageWithDescription = ({ imageUrl, alt, description }) => {
//   const isImportedImage = typeof imageUrl !== 'string';  // imported images are NOT strings
  
//   return (
//     <div className="bg-white rounded-lg shadow-md overflow-hidden">
//       <div className="relative w-full">
//         {isImportedImage ? (
//           // For imported local images like SS_BS
//           <Image 
//             src={imageUrl}
//             alt={alt || "Image description"}
//             className="object-contain w-full h-auto"
//           />
//         ) : (
//           // For string URLs like "/api/placeholder/600/400"
//           <Image 
//             src={imageUrl}
//             alt={alt || "Image description"}
//             width={600}  // You can adjust these
//             height={400}
//             className="object-contain w-full h-auto"
//           />
//         )}
//       </div>
//       <div className="p-4">
//         <p className="text-gray-700">{description}</p>
//       </div>
//     </div>
//   );
// };


{/* Introduction Section */}
      {/* <Section 
        title="Image Gallery with Descriptions" 
        content={
          <p>Below you'll find a collection of images with detailed descriptions to help you understand the content better.</p>
        } 
      /> */}
      
      {/* Images with Descriptions */}
      {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredImages.map((item, index) => (
          <ImageWithDescription
            key={index}
            imageUrl={item.imageUrl}
            alt={item.alt}
            description={item.description}
          />
        ))}
      </div> */}
      