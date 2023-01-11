import React from 'react';
import './card.css';

export default function ZodiacCard(props) {
  return (
    <div className="card">
      <img src={`images/${props.name}.png`} />
      <h2 className="name">{props.name}</h2>
      <p>{props.dates}</p>
    </div>
  );
}
