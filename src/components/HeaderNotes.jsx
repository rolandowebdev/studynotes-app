import React from 'react';
import NavMenu from './Menu/NavMenu';
import StudyNotes from '../assets/studynotes.svg';

export default function HeaderNotes() {
  return (
    <header className='header-wrapper'>
      <span className='header-wrapper__logo'>
        <img src={StudyNotes} alt='Study Notes Logo' /> StudyNotes
      </span>
      <NavMenu />
    </header>
  );
}
