import React from 'react';
import PlayRow from './PlayRow';
import range from '../utils/range';

const { CHANCES } = require('../utils/constants');

export default function ({ color, turn, checkColors, isGameOver }) {
  const rows = range(0, CHANCES).map(key => (
    <PlayRow
      key={key}
      parentId={key}
      color={color}
      turn={turn}
      checkColors={checkColors}
      isGameOver={isGameOver}
    />
  ));
  return <div className='playBoard'>{rows}</div>;
}
