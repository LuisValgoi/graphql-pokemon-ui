import React from 'react';

export const RegionTitle = (props) => {
  const { children, style } = props;
  const region = {
    wrapper: {
      border: '.5rem solid #F7F7F7'
    },
    title: {
      padding: '.5rem',
      color: '#007bff',
      border: '1px solid rgba(0,0,0,.125)',
      backgroundColor: 'white',
      borderRadius: 'calc(.25rem - 1px) calc(.25rem - 1px) calc(.25rem - 1px) calc(.25rem - 1px)',
      verticalAlign: 'middle',
      textAlign: 'center'
    }
  }

  return (
    <div data-testid='region-title-wrapper' style={{ ...region.wrapper, ...style }}>
      <div data-testid='region-title-info' style={region.title}>
        {children}
      </div>
    </div >
  );
};

export const RegionImage = (props) => {
  const { children, style } = props;
  const region = {
    wrapper: {
      border: '.5rem solid #F7F7F7',
      backgroundColor: 'white',
      verticalAlign: 'middle',
      textAlign: 'center'
    },
    image: {
      border: '1px solid rgba(0,0,0,.125)',
      borderRadius: 'calc(.25rem - 1px) calc(.25rem - 1px) calc(.25rem - 1px) calc(.25rem - 1px)'
    }
  };

  return (
    <div data-testid='region-image-wrapper' style={{ ...region.wrapper, ...style }}>
      <div data-testid='region-image-info' style={region.image}>
        {children}
      </div>
    </div>
  );
}

export const RegionContent = (props) => {
  const { children, style } = props;
  const region = {
    wrapper: {
      border: '.5rem solid #F7F7F7'
    },
    info: {
      border: '1px solid rgba(0,0,0,.125)',
      backgroundColor: 'white',
      borderRadius: 'calc(.25rem - 1px) calc(.25rem - 1px) calc(.25rem - 1px) calc(.25rem - 1px)',
      padding: '.5rem'
    }
  }

  return (
    <div data-testid='region-content-wrapper' style={{ ...region.wrapper, ...style }}>
      <div data-testid='region-content-info' style={region.info}>
        {children}
      </div>
    </div >
  );
};

export const Region = (props) => {
  const { children } = props;
  const region = {
    wrapper: {
      marginTop: '1rem',
      padding: '.1rem',
      border: '1px solid rgba(0,0,0,.125)',
      borderRadius: 'calc(.25rem - 1px) calc(.25rem - 1px) calc(.25rem - 1px) calc(.25rem - 1px)',
      backgroundColor: '#F7F7F7'
    }
  };
  return (
    <div data-testid='region' style={region.wrapper}>
      {children}
    </div>
  )
};
