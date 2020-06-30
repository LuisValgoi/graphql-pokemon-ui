import React from 'react'

import Container from 'react-bootstrap/Container';

import CardItem from '../CardItem/CardItem';
import Spinner from '../../components/Spinner/Spinner';
import CardColumns from 'react-bootstrap/CardColumns';

const CardList = ({ items }) => {
  return (
    <>
      <Container>
        {items.length === 0 ? (
          <Spinner />
        ) : (
            <CardColumns>
              {items.map(item => {
                return (
                  <CardItem key={item.id} item={item} />
                )
              })}
            </CardColumns>
          )}
      </Container>
    </>
  );
}

export default CardList;
