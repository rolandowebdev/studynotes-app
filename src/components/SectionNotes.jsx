import React from "react";
import Card from "./Card/Card";

export default function SectionNotes({ label, notes, setNotes }) {
  return (
    <section className='notes-section'>
      <h2 className='section-title'>{label}</h2>
      {notes.length === 0 ? (
        <p>Notes Unavailable</p>
      ) : (
        <div className='notes-section__body'>
          {notes?.map((note) => (
            <Card key={note.id} action={setNotes} {...note} />
          ))}
        </div>
      )}
    </section>
  );
}
