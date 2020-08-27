import React from 'react';
import Hole from './hole';
import range from '../utils/range';

class Row extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const holes = range(0, 5).map(id => {
      return <Hole key={`${this.props.parentId}_${id}`} />;
    });
    return (
      <div className='row'>
        {holes} <button>CHECK</button>
      </div>
    );
  }
}

export default Row;
