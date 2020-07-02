import React, { useEffect, useState } from 'react';
import { Link, useLocation } from "react-router-dom";

import BrowserURL from '../../util/BrowserURL';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

const style = {
  shell: {
    backgroundColor: '#f7f7f7',
    borderBottom: '1px solid #ececec',
    position: 'fixed',
    width: '100%',
    zIndex: 100
  },
  breadcrumb: {
    position: 'absolute',
    marginTop: '10px'
  }
};

const Shell = ({ title }) => {
  const location = useLocation();
  const [showNabBack, setShowNavBack] = useState(false);

  useEffect(() => {
    setShowNavBack(location.pathname !== BrowserURL.HOME);
  }, [location]);

  return (
    <div style={style.shell} className='p-4'>
      {showNabBack && (
        <Container>
          <Link style={style.breadcrumb} to={BrowserURL.HOME}>
            <Button variant='link'>Voltar</Button>
          </Link>
        </Container>
      )}
      <h1 className='text-center'>
        {title}
      </h1>
    </div>
  );
}

export default Shell;
