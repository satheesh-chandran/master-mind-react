import React, { useState } from 'react';
import { DEFAULT } from '../utils/constants';

const PlayHole = function ({ onClick, color, position }) {
  const [backgroundColor, setColor] = useState(DEFAULT);
  return (
    <div
      className='playHole'
      style={{ backgroundColor }}
      onClick={() => {
        setColor(color);
        onClick(color, position);
      }}
    ></div>
  );
};

export default PlayHole;
