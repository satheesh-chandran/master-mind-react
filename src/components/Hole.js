import React from 'react';

export default ({ color, onClick }) => (
  <div
    className='hole'
    style={{ backgroundColor: color }}
    onClick={onClick ? () => onClick(color) : () => {}}
  ></div>
);
