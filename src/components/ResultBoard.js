import React from 'react';
import ResultRow from './ResultRow';
import range from '../utils/range';

const ResultBoard = function ({ checkResult }) {
  const rows = range(0, 10).map(key => (
    <ResultRow key={`result_${key}`} parentId={key} result={checkResult[key]} />
  ));
  return <div className='resultBoard'>{rows}</div>;
};

export default ResultBoard;
