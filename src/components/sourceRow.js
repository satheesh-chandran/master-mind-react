import React from 'react';
import Hole from './Hole';
import sourceColor from '../utils/sourceColors';

export default function ({ onClick }) {
  const sourceHoles = sourceColor.map(color => (
    <Hole key={`source_${color}`} color={color} onClick={onClick} />
  ));
  return <div className='sourceRow'>{sourceHoles}</div>;
}
