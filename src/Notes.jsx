import React from "react";
import { useState, useEffect } from "react";
import { getInitialData } from "./utils";
import HeaderNotes from "./components/HeaderNotes";
import MainNotes from "./components/MainNotes";

export default function Notes() {
  const [query, setQuery] = useState("");
  const [searchNote, setSearchNote] = useState([]);
  const [notes, setNotes] = useState(getInitialData());

  const activeNotes = (searchNote || notes).filter((note) => !note.archived);
  const archivedNotes = (searchNote || notes).filter((note) => note.archived);

  useEffect(() => {
    setSearchNote(notes.filter((note) => note.title.toLowerCase().includes(query.toLowerCase())));
  }, [query, notes]);

  return (
    <>
      <HeaderNotes />
      <MainNotes
        setQuery={setQuery}
        setNotes={setNotes}
        activeNotes={activeNotes}
        archivedNotes={archivedNotes}
      />
    </>
  );
}
