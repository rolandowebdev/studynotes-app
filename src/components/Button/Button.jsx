import React from 'react';

export default function Button({ label, eventHandler, className }) {
  return (
    <button
      className={`btn ${className}`}
      type='button'
      onClick={eventHandler}
      data-action={label}>
      {label}
    </button>
  );
}
