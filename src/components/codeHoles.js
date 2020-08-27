import React from 'react';

const CodeHole = function (props) {
  const backgroundColor = props.isGameOver ? props.key : 'white';
  return <div className='codeHole' style={{ backgroundColor }}></div>;
};

export default CodeHole;
