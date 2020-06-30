import React from 'react';

const style = {
  shell: {
    backgroundColor: '#f7f7f7',
    borderBottom: '1px solid #ececec'
  }
};

const Shell = ({ title }) => {
  return (
    <div style={style.shell} className='p-4'>
      <h1 className='text-center'>
        {title}
      </h1>
    </div>
  );
}

export default Shell;
