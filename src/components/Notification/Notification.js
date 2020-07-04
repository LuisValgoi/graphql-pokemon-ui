import React from 'react'

import Alert from 'react-bootstrap/Alert';

const Notification = ({ title, message, variant, onClose }) => {
  const style = {
    alert: {
      marginTop: '1rem',
      marginBottom: '0rem'
    },
  };

  return (
    <Alert style={style.alert} variant={variant ?? 'warning'} onClose={onClose} dismissible>
      <Alert.Heading>{title}</Alert.Heading>
      <hr />
      <p>{message}</p>
    </Alert>
  )
};

export default Notification;
