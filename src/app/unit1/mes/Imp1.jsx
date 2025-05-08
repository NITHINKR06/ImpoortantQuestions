import React from 'react';

export default function Imp1({ searchQuery = "" }) {
  // Sample data for MES content
  const sections = [
    {
      title: "",
      content: (
        <section class="question" id="q6">
          
        </section>
      )
    }
  ];

  // Filter sections based on searchQuery
  const filteredSections = sections.filter(section =>
    section.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    section.content.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <main className="space-y-8">
      {filteredSections.map((section, index) => (
        <section key={index} className="bg-white rounded-xl shadow-xl p-6">
          <h2 className="text-2xl font-bold text-indigo-800 mb-3">{section.title}</h2>
          <p className="text-gray-700">{section.content}</p>
        </section>
      ))}
    </main>
  );
}
