import React from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

const Toolbar = () => {
  return (
    <Container>
      <InputGroup className="pb-3 pt-3">
        <FormControl placeholder="Search by a pokemon name" />
        <Button variant='link' className='ml-3'>Search</Button>
      </InputGroup>
    </Container>
  )
}

export default Toolbar;
