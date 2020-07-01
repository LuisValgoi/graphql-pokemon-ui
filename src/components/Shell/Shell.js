import React, { useState, useEffect } from 'react';
import { Redirect } from "react-router-dom";
import { useRouteMatch } from 'react-router-dom';

import BrowserURL from '../../util/BrowserURL';
import Container from 'react-bootstrap/Container';

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
    marginTop: '18px'
  }
};

const Shell = ({ title }) => {
  const [showNavBackLink, setShowNavBackLink] = useState(false);

  useEffect(() => {
    setShowNavBackLink(window.location.pathname !== BrowserURL.HOME)
  }, [window.location.pathname]);

  return (
    <div style={style.shell} className='p-4'>
      {showNavBackLink && (
        <Container>
          <Redirect to={BrowserURL.HOME}>
            <p style={style.breadcrumb}>Voltar</p>
          </Redirect>
        </Container>
      )}
      <h1 className='text-center'>
        {title}
      </h1>
    </div>
  );
}

export default Shell;
