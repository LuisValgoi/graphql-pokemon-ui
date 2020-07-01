import React from 'react'
import Alert from 'react-bootstrap/Alert'
import Container from 'react-bootstrap/Container';

const style = {
  container: {
    position: 'relative'
  },
  alert: {
    position: 'fixed',
    marginTop: '5px',
    left: '41%',
    zIndex: 99
  }
};

const Notification = ({ title, message, handleClose }) => {
  return (
    <Container style={style.container}>
      <Alert style={style.alert} variant='warning' onClose={handleClose} dismissible>
        <Alert.Heading>{title}</Alert.Heading>
        <hr />
        <p>{message}</p>
      </Alert>
    </Container>
  )
};

export default Notification;
