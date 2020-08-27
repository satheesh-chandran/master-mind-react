import React from 'react';
import CodeHole from './codeHoles';

class CodeRow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const codeHoles = this.props.codeColor.map(color => {
      return <CodeHole isWon={this.props.isWon} key={color} />;
    });
    return <div className='row'>{codeHoles}</div>;
  }
}

export default CodeRow;
