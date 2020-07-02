import React from 'react'
import { Link } from 'react-router-dom';

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import URLProvider from '../../util/URLProvider';
import BrowserURL from '../../util/BrowserURL';

const style = {
  image: {
    maxWidth: '300px',
    objectFit: 'contain',
    maxHeight: '100px'
  }
};

const CardItem = ({ item, onShowDeleteModel }) => {
  return (
    <Card key={item.id}>
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
        <Button variant='link' onClick={() => onShowDeleteModel(item)}>Delete</Button>
        <Link to={URLProvider.replace(BrowserURL.VIEW, item.id)}>
          <Button className='float-right' variant='link'>View</Button>
        </Link>
      </Card.Footer>
    </Card>
  );
}

export default CardItem;
