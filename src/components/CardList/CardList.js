/* eslint-disable array-callback-return */
import React from 'react'

import Alert from 'react-bootstrap/Alert';

import CardItem from '../CardItem/CardItem';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const CardList = ({ items, onShowDeleteModal }) => {
  let activeItemsLength = 0;
  return (
    <>
      <Row>
        {items.map(item => {
          if (item.active && item.shown) {
            activeItemsLength++;
            return (
              <Col key={item.id} xs={12} sm={6} md={12} lg={4} style={{ marginBottom: '2rem' }}>
                <CardItem key={item.id} item={item} onShowDeleteModal={onShowDeleteModal} />
              </Col>
            )
          }
        })}
      </Row>

      {activeItemsLength === 0 && (
        <Alert className='text-center' variant="secondary">No items were found</Alert>
      )}
    </>
  );
};

export default CardList;
