import React from 'react';
import range from '../utils/range';
import ResultHole from './ResultHole';

const createList = (length, fill) => new Array(length).fill(fill);

class ResultRow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const [presence, exact] = this.props.result || [0, 0];
    const colors = createList(exact, 'red').concat(
      createList(presence, '#ddd')
    );
    const holes = range(0, 5).map(key => {
      return (
        <ResultHole key={`resultHole_${key}`} color={colors[key] || 'white'} />
      );
    });
    return <div className='resultRow'>{holes}</div>;
  }
}

export default ResultRow;
