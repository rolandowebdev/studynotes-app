import React from 'react';
import { useState } from 'react';
import Input from './Input/Input';

export default function FormNotes({ updateNote }) {
  const [title, setTitle] = useState('');
  const [note, setNote] = useState('');

  const createNote = (event) => {
    event.preventDefault();
    const timeStamp = new Date().toISOString();
    updateNote((notes) => [
      ...notes,
      {
        id: timeStamp,
        title,
        body: note,
        archived: false,
        createAt: timeStamp,
      },
    ]);
  };

  return (
    <form className='form-notes' onSubmit={createNote}>
      <h2 className='form-notes__title'>Add note</h2>
      <small className='form-notes__counter'>{50 - title.length}</small>
      <Input
        value={title}
        onChange={setTitle}
        type='text'
        placeholder='Add title...'
        id='title'
        name='title'
        required
      />
      <Input
        value={note}
        onChange={setNote}
        type='textarea'
        placeholder='Write a note...'
        id='note'
        name='note'
        required
      />
      <Input type='submit' id='submitNote' name='submit-note' value='Create' />
    </form>
  );
}
