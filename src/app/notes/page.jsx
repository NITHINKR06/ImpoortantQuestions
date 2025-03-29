'use client';

import { useState, useEffect } from 'react';

export default function NotesPage() {
  const [note, setNote] = useState('');
  const [notes, setNotes] = useState([]);

  // Fetch notes from the API
  const fetchNotes = async () => {
    try {
      const res = await fetch('/api/notes');
      const data = await res.json();
      setNotes(data);
    } catch (error) {
      console.error('Failed to fetch notes:', error);
    }
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  // Handle note submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const noteData = {
      note,
      date: new Date(),
    };

    try {
      const res = await fetch('/api/notes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(noteData),
      });

      if (res.ok) {
        setNote('');
        fetchNotes();
      }
    } catch (error) {
      console.error('Error saving note:', error);
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Create a Note</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          value={note}
          onChange={(e) => setNote(e.target.value)}
          placeholder="Enter your note here..."
          rows={4}
          cols={50}
          required
          style={{ width: '100%', padding: '8px' }}
        />
        <br />
        <button type="submit" style={{ marginTop: '10px' }}>
          Save Note
        </button>
      </form>

      <h2 style={{ marginTop: '40px' }}>All Notes</h2>
      <ul>
        {notes.map((n) => (
          <li key={n._id} style={{ marginBottom: '20px', borderBottom: '1px solid #ccc', paddingBottom: '10px' }}>
            <p>{n.note}</p>
            <small>{new Date(n.date).toLocaleString()}</small>
          </li>
        ))}
      </ul>
    </div>
  );
}
