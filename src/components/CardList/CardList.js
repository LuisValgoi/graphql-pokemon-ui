import React from 'react'

import CardColumns from 'react-bootstrap/CardColumns';
import Alert from 'react-bootstrap/Alert';

import CardItem from '../CardItem/CardItem';

const CardList = ({ items, onShowDeleteModel }) => {
  return (
    <>
      <CardColumns>
        {items.map(item => {
          return (
            <CardItem key={item.id} item={item} onShowDeleteModel={onShowDeleteModel} />
          )
        })}
      </CardColumns>

      {items && items.length === 0 && (
        <Alert className='text-center' variant="secondary">No items were found</Alert>
      )}
    </>
  );
};

export default CardList;
