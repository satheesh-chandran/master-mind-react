import React from 'react';
import SourceHole from './sourceHole';
import sourceColor from '../utils/sourceColors';

const SourceRow = function (props) {
  const sourceHoles = sourceColor.map(color => {
    return (
      <SourceHole
        key={`source_${color}`}
        color={color}
        onClick={props.onClick}
      />
    );
  });
  return <div className='sourceRow'>{sourceHoles}</div>;
};

export default SourceRow;
