import React, { useEffect, useState } from 'react';
import { Link, useLocation } from "react-router-dom";
import { useSelector } from 'react-redux';

import BrowserURL from '../../util/BrowserURL';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import URLProvider from '../../util/URLProvider';

const style = {
  shell: {
    backgroundColor: '#f7f7f7',
    borderBottom: '1px solid #ececec',
    position: 'fixed',
    width: '100%',
    zIndex: 100
  }
};

const Shell = ({ title }) => {
  const location = useLocation();
  const pokemon = useSelector(state => state.pokemon.detail.item);
  const [showNavList, setShowNavList] = useState(false);

  useEffect(() => {
    setShowNavList(location.pathname !== BrowserURL.LIST);
  }, [location, pokemon.data.id]);

  return (
    <div style={style.shell} className='p-4'>
      <Container>
        <Row className='align-items-center'>
          <Col xs={2} sm={2} md={1} lg={1}>
            {showNavList && (
              <Link to={BrowserURL.LIST}>
                <Button variant='link'>Home</Button>
              </Link>
            )}
          </Col>
          <Col xs={8} sm={8} md={10} lg={10}>
            <h2 className='text-center'>
              {title}
            </h2>
          </Col>
          <Col xs={2} sm={2} md={1} lg={1}>
            {location.pathname.includes('pokemon') && !location.pathname.includes('edit') && (
              <Link to={URLProvider.replace(BrowserURL.EDIT, pokemon.data.id)}>
                <Button variant='primary'>Edit</Button>
              </Link>
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Shell;
