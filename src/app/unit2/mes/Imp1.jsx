import React from 'react';

export default function Imp1({ searchQuery = "" }) {
  // Sample data for MES content
  const sections = [
    {
      title: "Theory of ARM",
      content: "ARM architecture is a family of reduced instruction set computing (RISC) architectures for computer processors."
    },
    {
      title: "Digital Flip-Flops",
      content: "Flip-flops are basic memory elements in sequential logic circuits."
    },
    {
      title: "Register Transfer Logic",
      content: "RTL describes the flow of signals between hardware registers and the logical operations performed on those signals."
    },
    {
      title: "Microprocessor Design",
      content: "Design principles and architecture of microprocessors including control unit and ALU."
    },
    {
      title: "Embedded Systems",
      content: "Embedded systems are computer systems with dedicated functions within larger mechanical or electrical systems."
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
