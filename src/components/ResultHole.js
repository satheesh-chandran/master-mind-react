import React from 'react';

class ResultHole extends React.Component {
  constructor(props) {
    super(props);
    this.state = { color: 'white' };
  }

  render() {
    return <div className='resultHole'></div>;
  }
}

export default ResultHole;
