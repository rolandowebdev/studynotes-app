import React from "react";
import { useState } from "react";
import Input from "./Input/Input";

export default function FormNotes({ updateNote }) {
  const [title, setTitle] = useState("");
  const [note, setNote] = useState("");

  const createNote = (event) => {
    event.preventDefault();
    const timestamp = new Date().toISOString();
    updateNote((notes) => [
      ...notes,
      {
        id: timestamp,
        title,
        body: note,
        archived: false,
        createdAt: timestamp,
      },
    ]);
  };

  return (
    <form className='form-notes' onSubmit={createNote}>
      <h2 className='section-title'>Add Note</h2>
      <div className='title-input'>
        <small className='title-input__counter'>50 / {50 - title.length}</small>
        <Input
          value={title}
          onChange={setTitle}
          type='text'
          placeholder='Add title...'
          id='title'
          name='title'
          required
        />
      </div>
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
