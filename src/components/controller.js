import React from 'react';
import CodeRow from './codeRow';
import SourceRow from './sourceRow';
import PlayBoard from './playBoard';
import ResultBoard from './ResultBoard';
import sourceColors from '../utils/sourceColors';

const getRandomNumber = (min, max) => {
  const randomNumber = Math.random() * (max - min);
  return Math.floor(randomNumber + min);
};

const getCodeColor = function () {
  const colorCopy = sourceColors.slice();
  const codeColor = [];
  while (codeColor.length < 5) {
    const colorIndex = getRandomNumber(0, colorCopy.length);
    codeColor.push(colorCopy[colorIndex]);
    colorCopy.splice(colorIndex, 1);
  }
  return codeColor;
};

class Controller extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isGameOver: false, isWon: false, turn: 0, color: 'white' };
    this.codeColor = getCodeColor();
    this.selectColor = this.selectColor.bind(this);
  }

  selectColor(color) {
    this.setState({ color });
  }

  render() {
    return (
      <div className='controller'>
        <CodeRow
          codeColor={this.codeColor}
          isGameOver={this.state.isGameOver}
        />
        <div className='board'>
          <PlayBoard color={this.state.color} />
          <ResultBoard />
        </div>
        <SourceRow
          codeColor={this.codeColor}
          isGameOver={this.state.isGameOver}
          onClick={this.selectColor}
        />
        <p>YOU WON</p>
      </div>
    );
  }
}

export default Controller;
