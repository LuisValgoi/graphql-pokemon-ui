import React from 'react'
import Alert from 'react-bootstrap/Alert'
import Container from 'react-bootstrap/Container';

const style = {
  notification: {
    position: 'fixed',
    marginTop: '5px',
    left: '41%',
    zIndex: 99
  }
};

export default function Notification({ title, message, handleClose }) {
  return (
    <Container style={{ position: 'relative' }}>
      <Alert style={style.notification} variant='warning' onClose={handleClose} dismissible>
        <em>{new Date().toDateString()}</em>
        <p>{message}</p>
      </Alert>
    </Container>
  )
}
