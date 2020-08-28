import React from 'react';

class PlayHole extends React.Component {
  constructor(props) {
    super(props);
    this.state = { color: 'white' };
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({ color: this.props.color });
  }

  render() {
    return (
      <div
        className='playHole'
        style={{ backgroundColor: this.state.color }}
        onClick={this.onClick}
      ></div>
    );
  }
}

export default PlayHole;
