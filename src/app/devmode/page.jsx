'use client';

import React, { useState } from 'react';
import { useAuth } from '../../components/auth/AuthContext';

export default function DevModePage() {
  const { user } = useAuth();
  const [subject, setSubject] = useState('');
  const [title, setTitle] = useState('');
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [entries, setEntries] = useState([]);

  if (!user || !user.isDevMode) {
    return <div className="p-8 text-center text-red-600">Access Denied. Developer mode only.</div>;
  }

  const handleAddEntry = () => {
    if (!subject || !title || !question || !answer) {
      alert('Please fill all fields');
      return;
    }
    const newEntry = { subject, title, question, answer };
    setEntries([...entries, newEntry]);
    setSubject('');
    setTitle('');
    setQuestion('');
    setAnswer('');
  };

  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">Developer Mode - Add Questions</h1>
      <div className="space-y-4">
        <input
          type="text"
          placeholder="Subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          className="w-full p-2 border rounded"
        />
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-2 border rounded"
        />
        <textarea
          placeholder="Question"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          className="w-full p-2 border rounded"
          rows={3}
        />
        <textarea
          placeholder="Answer (points or paragraph)"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          className="w-full p-2 border rounded"
          rows={5}
        />
        <button
          onClick={handleAddEntry}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Add Entry
        </button>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Entries</h2>
        {entries.length === 0 && <p>No entries added yet.</p>}
        <ul className="space-y-4">
          {entries.map((entry, index) => (
            <li key={index} className="border p-4 rounded">
              <h3 className="font-bold">{entry.title} - <span className="italic">{entry.subject}</span></h3>
              <p><strong>Question:</strong> {entry.question}</p>
              <p><strong>Answer:</strong> {entry.answer}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
