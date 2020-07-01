// lifecycle & hooks
import React from 'react';

const style = {
  image: {
    width: '30%',
    display: 'block',
    margin: 'auto',
    position: 'relative'
  }
};

const Fallback = ({ image, altImage, text }) => {
  return (
    <div>
      <img src={image} style={style.image} alt={altImage} />
      <h3 className='text-center'>{text}</h3>
    </div>
  );
};

export default Fallback;
