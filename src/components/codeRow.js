import React from 'react';
import Hole from './Hole';

const CodeRow = function ({ codeColor, isGameOver }) {
  const codeHoles = codeColor.map((color, index) => (
    <Hole key={color} color={isGameOver ? codeColor[index] : 'white'} />
  ));
  return <div className='codeRow'>{codeHoles}</div>;
};

export default CodeRow;
