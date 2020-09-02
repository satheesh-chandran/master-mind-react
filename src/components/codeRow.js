import React from 'react';
import Hole from './Hole';
import { DEFAULT } from '../utils/constants';

export default function ({ codeColor, isGameOver }) {
  const codeHoles = codeColor.map((color, index) => (
    <Hole key={color} color={isGameOver ? codeColor[index] : DEFAULT} />
  ));
  return <div className='codeRow'>{codeHoles}</div>;
}
