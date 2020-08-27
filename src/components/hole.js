import React from 'react';

class Hole extends React.Component {
  constructor(props) {
    super(props);
    this.state = { color: 'white' };
  }

  render() {
    return (
      <div className='hole' style={{ backgroundColor: this.state.color }}></div>
    );
  }
}

export default Hole;
