import React from 'react';

const SourceHole = ({ color, onClick }) => (
  <div
    className='sourceHole'
    style={{ backgroundColor: color }}
    onClick={() => onClick(color)}
  ></div>
);

export default SourceHole;
