import React from 'react';
import Input from './Input/Input';

export default function SearchNotes({ search, updateQuery }) {
  return (
    <div className='search'>
      <h2 className='search__title'>Search Notes</h2>
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
