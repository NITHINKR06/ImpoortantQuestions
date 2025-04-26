import React from 'react';

export default function Imp1({ searchQuery = "" }) {
  // Sample data for SEPM content
  const sections = [
    {
      title: "Activity Diagrams",
      content: "Activity diagrams represent workflows of stepwise activities and actions with support for choice, iteration, and concurrency."
    },
    {
      title: "State Diagrams",
      content: "State diagrams describe the states and transitions of an object during its lifetime."
    },
    {
      title: "Use Case Diagrams",
      content: "Use case diagrams show the interactions between actors and the system to achieve a goal."
    },
    {
      title: "Sequence Diagrams",
      content: "Sequence diagrams illustrate how objects interact in a particular scenario of a use case."
    },
    {
      title: "Test Cases",
      content: "Test cases specify inputs, execution conditions, and expected results to verify a feature or functionality."
    },
    {
      title: "Extreme Programming",
      content: "Extreme Programming (XP) is an agile software development methodology emphasizing customer satisfaction and teamwork."
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
