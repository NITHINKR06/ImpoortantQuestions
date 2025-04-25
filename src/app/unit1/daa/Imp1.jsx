import React from 'react';

export default function Imp1() {
  return (
    <main className="container mx-auto px-4 py-8 space-y-12">
      
    </main>
  );
}

// Reusable Section component defined locally
const Section = ({ title, content }) => {
  return (
    <section className="bg-white rounded-xl shadow-xl p-6 md:p-8">
      <h2 className="text-3xl font-bold text-indigo-800 mb-4">{title}</h2>
      <div className="text-gray-800 text-base md:text-lg">{content}</div>
    </section>
  );
};
