import React from 'react';
import PlayRow from './PlayRow';
import range from '../utils/range';

const PlayBoard = function ({ color, turn, checkColors, isGameOver }) {
  const rows = range(0, 10).map(key => (
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
};

export default PlayBoard;
