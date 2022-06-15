import React from 'react';
import Input from './Input/Input';
import SearchIcon from '../assets/search.svg';

export default function SearchNotes({ search, updateQuery }) {
  return (
    <div className='search-notes'>
      <h2 className='section-title'>Search Note</h2>
      <div className='search-input'>
        <img
          className='search-input__icon'
          src={SearchIcon}
          alt='Search Icon'
        />
        <Input
          value={search}
          onChange={updateQuery}
          type='search'
          id='search_note'
          name='search_note'
          placeholder='Find note...'
        />
      </div>
    </div>
  );
}
