import React from 'react';

import Spinner from 'react-bootstrap/Spinner';

function SpinnerInternal() {
  return (
    <div data-testid='spinner' className='text-center' style={{ marginTop: '1rem' }}>
      <Spinner animation="border" />
    </div >
  );
}

export default SpinnerInternal;
