import React from 'react'
import Alert from 'react-bootstrap/Alert'

const style = {
  alert: {
    marginTop: '1rem',
    marginBottom: '-5px',
    zIndex: 99
  }
};

const Notification = ({ title, message, variant, onClose }) => {
  return (
    <Alert style={style.alert} variant={variant ?? 'warning'} onClose={onClose} dismissible>
      <Alert.Heading>{title}</Alert.Heading>
      <hr />
      <p>{message}</p>
    </Alert>
  )
};

export default Notification;
