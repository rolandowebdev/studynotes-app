import React from 'react';
import SectionNotes from './SectionNotes';
import SearchNotes from './SearchNotes';
import FormNotes from './FormNotes';

export default function MainNotes({
  query,
  setQuery,
  setNotes,
  activeNotes,
  archivedNotes,
}) {
  return (
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
  );
}
