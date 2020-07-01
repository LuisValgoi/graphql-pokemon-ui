// lifecycle & hooks
import React from 'react';

import notfound from '../assets/notfound.png';

const style = {
  image: {
    width: '30%',
    display: 'block',
    margin: 'auto',
    position: 'relative'
  }
};

const NotFound = () => {
  return (
    <div>
      <img src={notfound} style={style.image} alt='Not Found' />
      <h3 className='text-center'>Hmmm, we could find this URL</h3>
    </div>
  );
};

export default NotFound;
