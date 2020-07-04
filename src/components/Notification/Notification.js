import React from 'react'

import Alert from 'react-bootstrap/Alert';
import { useIsSmallScreen } from '../../hooks/useIsMobile';

const Notification = ({ title, message, variant, onClose }) => {
  const isSmallScreen = useIsSmallScreen();

  return (
    <Alert style={{ marginTop: isSmallScreen ? '3rem' : '1rem' }} variant={variant ?? 'warning'} onClose={onClose} dismissible>
      <Alert.Heading>{title}</Alert.Heading>
      <hr />
      <p>{message}</p>
    </Alert>
  )
};

export default Notification;
