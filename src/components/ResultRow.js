import React from 'react';
import Hole from './Hole';
import range from '../utils/range';

const createList = (length, fill) => new Array(length).fill(fill);

const ResultRow = function ({ result }) {
  const [presence, exact] = result || [0, 0];
  const colors = createList(exact, 'red').concat(createList(presence, '#ddd'));
  const holes = range(0, 5).map(key => (
    <Hole key={`resultHole_${key}`} color={colors[key] || 'white'} />
  ));
  return <div className='resultRow'>{holes}</div>;
};

export default ResultRow;
