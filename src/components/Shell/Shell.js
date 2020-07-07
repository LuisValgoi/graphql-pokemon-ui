import React, { useEffect, useState } from 'react';
import { Link, useLocation, useHistory } from "react-router-dom";
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
  const history = useHistory();
  const pokemon = useSelector(state => state.pokemon.detail.item);
  const [showNavList, setShowNavList] = useState(false);
  const [showNavEdit, setShowNavEdit] = useState(false);
  const [id, setId] = useState(pokemon.data.id);

  useEffect(() => {
    setShowNavList(location.pathname !== BrowserURL.LIST);
    setShowNavEdit(location.pathname === URLProvider.replace(BrowserURL.DETAIL, pokemon.data.id));
  }, [location, pokemon.data.id]);

  useEffect(() => {
    setId(pokemon.data.id)
  }, [pokemon]);

  return (
    <div data-testid='shell-wrapper' style={style.shell} className='p-4'>
      <Container>
        <Row>
          <Col data-testid='shell-home-col' xs={2} sm={2} md={1} lg={1} className='justify-content-start'>
            {showNavList && (
              <Link data-testid='shell-home' to={BrowserURL.LIST}>
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
            {showNavEdit && (
              <Button onClick={() => history.push(URLProvider.replace(BrowserURL.EDIT, id))} variant='primary'>Edit</Button>
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Shell;
