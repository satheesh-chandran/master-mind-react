import React from 'react';
import PlayHole from './PlayHole';
import range from '../utils/range';

class PlayRow extends React.Component {
  constructor(props) {
    super(props);
    this.state = { colors: new Array(5) };
    this.storeColors = this.storeColors.bind(this);
    this.submitColors = this.submitColors.bind(this);
  }

  submitColors() {
    if (this.state.colors.filter(color => color).length !== 5)
      return alert('Fill The Colors');
    this.props.checkColors(this.state.colors, this.props.parentId);
  }

  storeColors(color, position) {
    this.setState(state => {
      const newColorList = state.colors.slice();
      newColorList[position] = color;
      return { colors: newColorList };
    });
  }

  render() {
    const holes = range(0, 5).map(id => (
      <PlayHole
        key={`${this.props.parentId}_${id}`}
        color={this.props.color}
        position={id}
        onClick={this.storeColors}
      />
    ));
    const isRowActive = this.props.parentId === this.props.turn;
    return (
      <div className={`playRow ${isRowActive ? '' : 'inActive'}`}>
        {holes}{' '}
        <button
          className={isRowActive ? '' : 'invisible'}
          onClick={this.submitColors}
        >
          CHECK
        </button>
      </div>
    );
  }
}

export default PlayRow;
