/* eslint-disable array-callback-return */
import React from 'react'

import CardColumns from 'react-bootstrap/CardColumns';
import Alert from 'react-bootstrap/Alert';

import CardItem from '../CardItem/CardItem';

const CardList = ({ items, onShowDeleteModal }) => {
  let activeItemsLength = 0;
  return (
    <>
      <CardColumns>
        {items.map(item => {
          if (item.active && item.shown) {
            activeItemsLength++;
            return <CardItem key={item.id} item={item} onShowDeleteModal={onShowDeleteModal} />
          }
        })}
      </CardColumns>

      {activeItemsLength === 0 && (
        <Alert className='text-center' variant="secondary">No items were found</Alert>
      )}
    </>
  );
};

export default CardList;
