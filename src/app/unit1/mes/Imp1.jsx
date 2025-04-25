import React from 'react';

export default function CallRetInfo() {
  return (
    <main className="space-y-12 p-4">
      

    </main>
  );
}

// Reusable Section component defined locally in CallRetInfo
const Section = ({ title, content }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <section className="bg-white rounded-xl shadow-xl p-8 mb-6 transition-all duration-200">
      <div 
        className="flex justify-between items-center cursor-pointer hover:bg-indigo-50 p-4 rounded-lg"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h2 className="text-2xl font-semibold text-indigo-800">{title}</h2>
        <span className="text-2xl text-indigo-600 ml-4">
          {isOpen ? '−' : '+'}
        </span>
      </div>
      {isOpen && (
        <div className="mt-6 animate-fadeIn">
          {content}
        </div>
      )}
    </section>
  );
};