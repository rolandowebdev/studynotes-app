import React from "react";
import Button from "../Button/Button";

export default function CardFooter({ action, id, archived }) {
  const deleteNote = (item) => action((notes) => notes.filter((note) => note.id !== item));

  const archiveNote = (item) =>
    action((notes) =>
      notes.map((note) => {
        if (note.id === item) return { ...note, archived: !note.archived };
        return note;
      }),
    );
  return (
    <footer className='card__footer'>
      <Button className='btn--danger' label='Delete' eventHandler={() => deleteNote(id)} />
      <Button
        className='btn--success'
        label={archived ? "Unarchived" : "Archived"}
        eventHandler={() => archiveNote(id)}
      />
    </footer>
  );
}
