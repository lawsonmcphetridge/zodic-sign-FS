import React from 'react';
import { zodiac } from '../../data';
import './Main.css';
import Zodiac from '../Zodiac/Zodiac';
import background from '../../back-ground-image.jpg';

export default function Main() {
  return <main style={{ backgroundImage: `url(${background})` }}>
    {zodiac.map((signs) => (
      <Zodiac key={signs.id} zodiac={signs} />
    ))}



  </main>;
}