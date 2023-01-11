import './main.css';
import React from 'react';
import { zodiac } from '../../zodiacs.js';
import ZodiacCard from '../cards/card.js';

export default function Main() {
  return (
    <main className="main">
      {zodiac.map((zodiac) => (
        <ZodiacCard
          key={zodiac.id}
          name={zodiac.name}
          dates={zodiac.dates}
          symbol={zodiac.symbol}
        />
      ))}
    </main>
  );
}
