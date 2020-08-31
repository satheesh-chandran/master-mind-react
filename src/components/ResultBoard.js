import React from 'react';
import ResultRow from './ResultRow';
import range from '../utils/range';

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const rows = range(0, 10).map(key => {
      return (
        <ResultRow
          key={`result_${key}`}
          parentId={key}
          result={this.props.checkResult[key]}
        />
      );
    });
    return <div className='resultBoard'>{rows}</div>;
  }
}

export default Board;
