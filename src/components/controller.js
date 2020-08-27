import React from 'react';
import Row from './row';
import CodeRow from './codeRow';
import Board from './board';
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
    this.state = { isWon: false, turn: 0 };
    this.codeColor = getCodeColor();
  }

  render() {
    return (
      <div className='controller'>
        <CodeRow codeColor={this.codeColor} isWon={this.state.isWon} />
        <Board />
        <Row />
        <p>You won</p>
      </div>
    );
  }
}

export default Controller;
