import React from 'react';
import NavMenu from './Menu/NavMenu';

export default function HeaderNotes() {
  return (
    <header className='header-wrapper'>
      <span className='header-wrapper__logo'>StudyNotes</span>
      <NavMenu />
    </header>
  );
}
