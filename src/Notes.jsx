import React from 'react';
import { useState, useEffect } from 'react';
import { getInitialData } from './utils';
import SectionNotes from './components/SectionNotes';
import SearchNotes from './components/SearchNotes';
import FormNotes from './components/FormNotes';

export default function Notes() {
  const [query, setQuery] = useState('');
  const [searchNote, setSearchNote] = useState([]);
  const [notes, setNotes] = useState(getInitialData());

  const activeNotes = (searchNote || notes).filter((note) => !note.archived);
  const archivedNotes = (searchNote || notes).filter((note) => note.archived);

  useEffect(() => {
    setSearchNote(
      notes.filter((note) =>
        note.title.toLowerCase().includes(query.toLowerCase())
      )
    );
  }, [query, notes]);

  return (
    <>
      <div className='form-container'>
        <SearchNotes
          search={query}
          updateQuery={setQuery}
          updateNotes={setNotes}
        />
        <FormNotes updateNote={setNotes} />
      </div>
      <main className='main-container'>
        <SectionNotes
          label='Active Notes'
          notes={activeNotes}
          setNotes={setNotes}
        />
        <SectionNotes
          label='Archive Notes'
          notes={archivedNotes}
          setNotes={setNotes}
        />
      </main>
    </>
  );
}
