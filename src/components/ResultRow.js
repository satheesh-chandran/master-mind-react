import React from 'react';
import Hole from './Hole';
import range from '../utils/range';
const {
  NUM_OF_COLORS,
  EXACT,
  PRESENCE,
  DEFAULT
} = require('../utils/constants');

const createList = (length, fill) => new Array(length).fill(fill);

const ResultRow = function ({ result }) {
  const [presence, exact] = result || [0, 0];
  const colors = createList(exact, EXACT).concat(
    createList(presence, PRESENCE)
  );
  const holes = range(0, NUM_OF_COLORS).map(key => (
    <Hole key={`resultHole_${key}`} color={colors[key] || DEFAULT} />
  ));
  return <div className='resultRow'>{holes}</div>;
};

export default ResultRow;
