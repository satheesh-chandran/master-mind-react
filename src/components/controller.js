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
  console.log(codeColor);
  return codeColor;
};

class Controller extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      turn: 0,
      isWon: false,
      color: 'white',
      checkResult: [],
      isGameOver: false
    };
    this.codeColor = getCodeColor();
    this.selectColor = this.selectColor.bind(this);
    this.checkColors = this.checkColors.bind(this);
  }

  checkColors(colors, rowId) {
    if (this.state.turn !== rowId) return;
    if (this.state.turn === 10) this.setState({ isGameOver: true });
    const result = [0, 0];
    colors.forEach(color => this.codeColor.includes(color) && result[0]++);
    colors.forEach((color, index) => {
      return color === this.codeColor[index] && result[0]-- && result[1]++;
    });
    if (result[1] === 5) this.setState({ isWon: true });
    const { turn, checkResult } = this.state;
    this.setState({
      checkResult: checkResult.concat([result]),
      turn: turn + 1
    });
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
          <PlayBoard
            color={this.state.color}
            turn={this.state.turn}
            checkColors={this.checkColors}
          />
          <ResultBoard checkResult={this.state.checkResult} />
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
