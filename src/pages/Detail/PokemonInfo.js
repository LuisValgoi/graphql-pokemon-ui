import React from 'react'
import { Link, useHistory } from 'react-router-dom';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';

import URLProvider from '../../util/URLProvider';
import BrowserURL from '../../util/BrowserURL';
import { useIsSmallScreen } from '../../hooks/useIsMobile';

export const RowInfos = (props) => {
  const { title, className, item } = props;

  return (
    <Row className={className}>
      <Col xs={12} sm={12} md={3} lg={2}><h5>{title}</h5></Col>
      <Col xs={12} sm={12} md={9} lg={10}>
        <span className='mr-2'>
          <b>Weight: </b>{item.weight.minimum} - {item.weight.maximum}
        </span>
        <span className='mr-2'>
          <b>Height: </b>{item.height.minimum} - {item.height.maximum}
        </span>
        <span className='mr-2'>
          <b>Flee Rate: </b>{item.fleeRate}
        </span>
        <span className='mr-2'>
          <b>Max CP: </b>{item.maxCP}
        </span>
        <span className='mr-2'>
          <b>Max HP: </b>{item.maxHP}
        </span>
      </Col>
    </Row>
  );
};

export const RowBadges = (props) => {
  const { title, items, variant, customKey, customName } = props;

  return (
    <Row>
      <Col xs={12} sm={12} md={3} lg={2}><h5>{title}</h5></Col>
      <Col xs={12} sm={12} md={9} lg={10}>
        {items.map(item => {
          return <Badge key={customKey ? customKey(item) : item} className='mr-2' variant={variant}>{customName ? customName(item) : item}</Badge>
        })}
      </Col>
    </Row>
  )
}

export const RowEvolutions = (props) => {
  const { items, title } = props;
  const isSmallScreen = useIsSmallScreen();
  const history = useHistory();

  return (
    <Row className='mb-2'>
      <Col xs={12} sm={12} md={3} lg={2} style={{ alignSelf: 'center' }}><h5>{title}</h5></Col>
      <Col xs={12} sm={12} md={9} lg={10}>
        <>
          <Evolutions items={items} />
          <Button variant='link' onClick={() => history.goBack()} className={`mr-2 ${isSmallScreen ? 'float-left' : 'float-right'}`}>Go Back</Button>
        </>
      </Col>
    </Row>
  )
}

export const Evolutions = (props) => {
  const { items } = props;

  return (
    <>
      {items ? items.map(item => {
        return (
          <Link key={item.id} to={URLProvider.replace(BrowserURL.DETAIL, item.id)}>
            <Button variant='outline-primary' className='mr-2'>{item.name}</Button>
          </Link>
        );
      }) : (
          <Button disabled variant='outline-primary' className='mr-2'>This is the last evolution</Button>
        )}
    </>
  )
}
