import React from 'react';

import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const Toolbar = ({ onSearch }) => {
  const style = {
    row: {
      marginTop: '1rem',
      paddingBottom: '1rem'
    }
  };

  return (
    <Row style={style.row}>
      <Col sm={12}>
        <InputGroup>
          <FormControl onInput={(e) => onSearch(e.target.value)} placeholder="Search by a pokemon name" />
        </InputGroup>
      </Col>
    </Row>
  )
}

export default Toolbar;
