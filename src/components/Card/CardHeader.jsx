import React from 'react';

export default function CardHeader({ title, date, body }) {
  return (
    <header className='card__header'>
      <h3 className='heading-card'>{title}</h3>
      <small className='date-card'>{date}</small>
      <p className='body-card'>{body}</p>
    </header>
  );
}
