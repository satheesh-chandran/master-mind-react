import React from 'react';
import ResultRow from './ResultRow';
import range from '../utils/range';
const { CHANCES } = require('../utils/constants');

export default function ({ checkResult }) {
  const rows = range(0, CHANCES).map(key => (
    <ResultRow key={`result_${key}`} parentId={key} result={checkResult[key]} />
  ));
  return <div className='resultBoard'>{rows}</div>;
}
