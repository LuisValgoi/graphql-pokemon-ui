import React from 'react';

import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const Toolbar = ({ onSearch }) => {
  return (
    <Row className='pt-3 pb-3'>
      <Col sm={12}>
        <InputGroup>
          <FormControl onInput={(e) => onSearch(e.target.value)} placeholder="Search by a pokemon name" />
        </InputGroup>
      </Col>
    </Row>
  )
}

export default Toolbar;
