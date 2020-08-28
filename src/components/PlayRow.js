import React from 'react';
import PlayHole from './PlayHole';
import range from '../utils/range';

class PlayRow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    // console.log(this.props);
    const holes = range(0, 5).map(id => {
      return (
        <PlayHole
          key={`${this.props.parentId}_${id}`}
          color={this.props.color}
        />
      );
    });
    return (
      <div className='playRow'>
        {holes} <button>CHECK</button>
      </div>
    );
  }
}

export default PlayRow;
