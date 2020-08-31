import React from 'react';
import CodeHole from './codeHoles';

const CodeRow = function ({ codeColor, isGameOver }) {
  const codeHoles = codeColor.map((color, index) => (
    <CodeHole key={color} color={isGameOver ? codeColor[index] : 'white'} />
  ));
  return <div className='codeRow'>{codeHoles}</div>;
};

export default CodeRow;
