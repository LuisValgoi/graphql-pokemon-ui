import React from 'react'

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';

const style = {
  image: {
    maxWidth: '300px',
    objectFit: 'contain',
    maxHeight: '100px'
  }
};

const CardItem = ({ item, onSetSelectedItem, onShowDeleteModel }) => {
  const _handleShowDeleteModel = () => {
    onSetSelectedItem(item.id);
    onShowDeleteModel();
  };

  const _handleViewPokemon = () => {
    onSetSelectedItem(item.id);
    // redirect to detail
  };

  return (
    <Card>
      <Card.Header className='text-center'>
        <Card.Text>{item.name}</Card.Text>
      </Card.Header>
      <Card.Body>
        <Card.Img src={item.image} style={style.image}></Card.Img>

        <div>
          <Card.Title className='mt-1'>Types</Card.Title>
          {item.types.map(type => {
            return <Badge key={type} className='ml-2' variant="info">{type}</Badge>
          })}
        </div>
      </Card.Body>
      <Card.Footer className="text-muted">
        <Button variant='link' onClick={_handleShowDeleteModel}>Delete</Button>
        <Button className='float-right' onClick={_handleViewPokemon} variant='link'>View</Button>
      </Card.Footer>
    </Card>
  );
}

export default CardItem;
