import React from 'react';

import Spinner from 'react-bootstrap/Spinner';

function SpinnerInternal() {
  return <div className='text-center'><Spinner style={{ margin: '0 auto' }} animation="border" /></div>;
}

export default SpinnerInternal;
