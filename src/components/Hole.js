import React from 'react';

const Hole = ({ color, onClick }) => {
  const clickHandler = onClick ? () => onClick(color) : () => {};
  return (
    <div
      className='hole'
      style={{ backgroundColor: color }}
      onClick={clickHandler}
    ></div>
  );
};

export default Hole;
