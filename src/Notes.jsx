import React from 'react';
import SectionNotes from './components/SectionNotes';
import SearchNotes from './components/SearchNotes';
import FormNotes from './components/FormNotes';
import HeaderNotes from './components/HeaderNotes';
import { useState, useEffect } from 'react';
import { getInitialData } from './utils';

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
      <HeaderNotes />
      <main className='container'>
        <div className='form-wrapper'>
          <SearchNotes
            search={query}
            updateQuery={setQuery}
            updateNotes={setNotes}
          />
          <FormNotes updateNote={setNotes} />
        </div>
        <div className='section-wrapper'>
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
        </div>
      </main>
    </>
  );
}
