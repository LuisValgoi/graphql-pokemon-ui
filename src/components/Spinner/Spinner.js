import React from 'react';

import Spinner from 'react-bootstrap/Spinner';

function SpinnerInternal(props) {
  const { style } = props;

  return (
    <div className='text-center' style={style}>
      <Spinner animation="border" />
    </div >
  );
}

export default SpinnerInternal;
