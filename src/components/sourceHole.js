import React from 'react';

class SourceHole extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div
        className='sourceHole'
        style={{ backgroundColor: this.props.color }}
      ></div>
    );
  }
}

export default SourceHole;
