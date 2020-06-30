import React, { useEffect } from 'react'

import Container from 'react-bootstrap/Container';

import CardItem from '../CardItem/CardItem';
import Spinner from '../../components/Spinner/Spinner';
import CardColumns from 'react-bootstrap/CardColumns';

const CardList = ({ items, onLoadScroll }) => {

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if ((window.innerHeight + window.scrollY) >= document.body.scrollHeight) {
        onLoadScroll();
      }
    });
  }, [onLoadScroll]);

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
