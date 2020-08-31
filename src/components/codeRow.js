import React from 'react';
import CodeHole from './codeHoles';

class CodeRow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { codeColor, isGameOver } = this.props;
    const codeHoles = codeColor.map((color, index) => (
      <CodeHole key={color} color={isGameOver ? codeColor[index] : 'white'} />
    ));
    return <div className='codeRow'>{codeHoles}</div>;
  }
}

export default CodeRow;
