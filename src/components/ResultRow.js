import React from 'react';
import range from '../utils/range';
import ResultHole from './ResultHole';

class ResultRow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const holes = range(0, 5).map(key => {
      return <ResultHole key={`resultHole_${key}`} />;
    });
    return <div className='resultRow'>{holes}</div>;
  }
}

export default ResultRow;
