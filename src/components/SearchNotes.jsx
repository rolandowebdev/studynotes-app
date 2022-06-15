import React from 'react';
import Input from './Input/Input';

export default function SearchNotes({ search, updateQuery }) {
  return (
    <div className='search-notes'>
      <h2 className='section-title'>Search Note</h2>
      <Input
        value={search}
        onChange={updateQuery}
        type='search'
        id='search_note'
        name='search_note'
        placeholder='Find note...'
      />
    </div>
  );
}
