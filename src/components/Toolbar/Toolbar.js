import React from 'react';

import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const Toolbar = () => {
  return (
    <Container>
      <Row className='pt-3 pb-3'>
        <Col sm={12}>
          <InputGroup >
            <FormControl placeholder="Search by a pokemon name" />
          </InputGroup>
        </Col>
      </Row>
    </Container>
  )
}

export default Toolbar;
