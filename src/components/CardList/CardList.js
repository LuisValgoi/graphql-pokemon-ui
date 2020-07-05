/* eslint-disable array-callback-return */
import React from 'react'

import Alert from 'react-bootstrap/Alert';

import CardItem from '../CardItem/CardItem';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

const CardList = ({ items, onShowDeleteModal }) => {
  let activeItemsLength = 0;
  return (
    <Container fluid>
      <Row>
        {items.map(item => {
          if (item.active && item.shown) {
            activeItemsLength++;
            return <CardItem key={item.id} item={item} onShowDeleteModal={onShowDeleteModal} />
          }
        })}
      </Row>

      {activeItemsLength === 0 && (
        <Alert className='text-center' variant="secondary">No items were found</Alert>
      )}
    </Container>
  );
};

export default CardList;
