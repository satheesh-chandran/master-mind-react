import React from 'react';
import PlayRow from './PlayRow';
import range from '../utils/range';

class Board extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const rows = range(0, 10).map(key => {
      return (
        <PlayRow
          key={key}
          parentId={key}
          color={this.props.color}
          turn={this.props.turn}
          checkColors={this.props.checkColors}
        />
      );
    });
    return <div className='playBoard'>{rows}</div>;
  }
}

export default Board;
