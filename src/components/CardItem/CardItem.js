import React from 'react'

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';

const CardItem = ({ item }) => {
  return (
    <Card>
      <Card.Header className='text-center'>
        <Card.Text>{item.name}</Card.Text>
      </Card.Header>
      <Card.Body>
        <Card.Img src={item.image} style={{ maxWidth: '300px', objectFit: 'contain', maxHeight: '100px' }}></Card.Img>

        <div>
          <Card.Title className='mt-1'>Types</Card.Title>
          {item.types.map(type => {
            return <Badge key={type} className='ml-2' variant="info">{type}</Badge>
          })}
        </div>
      </Card.Body>
      <Card.Footer className="text-muted">
        <Button variant='link'>Delete</Button>
        <Button className='float-right' variant='link'>Edit</Button>
      </Card.Footer>
    </Card>
  );
}

export default CardItem;
