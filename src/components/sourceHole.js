import React from 'react';

const SourceHole = function (props) {
  return (
    <div
      className='sourceHole'
      style={{ backgroundColor: props.color }}
      onClick={() => props.onClick(props.color)}
    ></div>
  );
};

export default SourceHole;
