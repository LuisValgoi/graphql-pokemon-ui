import React from 'react'

import CardColumns from 'react-bootstrap/CardColumns';
import Alert from 'react-bootstrap/Alert';

import CardItem from '../CardItem/CardItem';

const CardList = ({ items, onSetSelectedItem, onShowDeleteModel, onLoadScroll }) => {
  return (
    <>
      <CardColumns>
        {items.map(item => {
          return (
            <CardItem onSetSelectedItem={onSetSelectedItem} onShowDeleteModel={onShowDeleteModel} key={item.id} item={item} />
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
