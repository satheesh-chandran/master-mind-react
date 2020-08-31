import React from 'react';

class PlayHole extends React.Component {
  constructor(props) {
    super(props);
    this.state = { color: 'white' };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { onClick, color, position } = this.props;
    this.setState({ color });
    onClick(color, position);
  }

  render() {
    return (
      <div
        className='playHole'
        style={{ backgroundColor: this.state.color }}
        onClick={this.handleClick}
      ></div>
    );
  }
}

export default PlayHole;
