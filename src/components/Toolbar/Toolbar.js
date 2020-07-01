import React from 'react';

import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const Toolbar = ({ amountSelected, onScrollAmountSelect }) => {
  const handleOnScrollAmountSelect = (e) => {
    const value = e.target.getAttribute('value');
    onScrollAmountSelect(parseInt(value, 10));
  };

  return (
    <Container>
      <Row className='pt-3 pb-3'>
        <Col sm={2}>
          <DropdownButton title={`Scroll Amount - (${amountSelected})`}>
            <Dropdown.Item value={1} onClick={(e) => handleOnScrollAmountSelect(e)}>1</Dropdown.Item>
            <Dropdown.Item value={2} onClick={(e) => handleOnScrollAmountSelect(e)}>2</Dropdown.Item>
            <Dropdown.Item value={3} onClick={(e) => handleOnScrollAmountSelect(e)}>3</Dropdown.Item>
          </DropdownButton>
        </Col>
        <Col sm={10} >
          <InputGroup >
            <FormControl placeholder="Search by a pokemon name" />
          </InputGroup>
        </Col>
      </Row>
    </Container>
  )
}

export default Toolbar;
