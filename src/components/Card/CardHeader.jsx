import React from "react";

export default function CardHeader({ title, date, body }) {
  return (
    <header className='card__header'>
      <div className='header-text'>
        <h3>{title}</h3>
        <small>{date}</small>
      </div>
      <p className='body-card'>{body}</p>
    </header>
  );
}
