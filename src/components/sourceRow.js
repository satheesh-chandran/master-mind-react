import React from 'react';
import SourceHole from './sourceHole';
import sourceColor from '../utils/sourceColors';

const SourceRow = function ({ onClick }) {
  const sourceHoles = sourceColor.map(color => (
    <SourceHole key={`source_${color}`} color={color} onClick={onClick} />
  ));
  return <div className='sourceRow'>{sourceHoles}</div>;
};

export default SourceRow;
