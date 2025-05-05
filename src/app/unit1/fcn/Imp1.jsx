import React from 'react';

const sections = [
  
  {
    title: '',
    content: (
      <>
      </>
    )
  },
];

export default function NetworkTopics({ searchQuery = "" }) {
  // Filter sections based on searchQuery
  const filteredSections = sections.filter(section =>
    section.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    section.content.props.children.toString().toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <main className="space-y-12">
      {filteredSections.map((section, index) => (
        <Section key={index} title={section.title} content={section.content} />
      ))}
    </main>
  );
}

// Reusable Section component
const Section = ({ title, content }) => {
  return (
    <section className="bg-white rounded-xl shadow-xl p-8">
      <h2 className="text-3xl font-bold text-indigo-800 mb-4">{title}</h2>
      <div>{content}</div>
    </section>
  );
};
