import React from 'react';
import Row from './row';
import range from '../utils/range';

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const rows = range(0, 10).map(key => {
      return <Row key={key} />;
    });
    return <div className='board'>{rows}</div>;
  }
}

export default Board;
