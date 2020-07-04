import React from 'react'

import Alert from 'react-bootstrap/Alert';
import { useIsSmallScreen } from '../../hooks/useIsMobile';

const Notification = ({ title, message, variant, onClose }) => {
  const isSmallScreen = useIsSmallScreen();
  const style = {
    alert: {
      marginTop: isSmallScreen ? '4rem' : '1rem',
      marginBottom: '-5px',
      zIndex: 99
    }
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
