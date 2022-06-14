import React from 'react';

export default function Button({ label, eventHandler }) {
  return (
    <button
      className='card__button'
      type='button'
      onClick={eventHandler}
      data-action={label}>
      {label}
    </button>
  );
}
