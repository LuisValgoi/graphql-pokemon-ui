import React from 'react'

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const ConfirmationModal = ({ onClose, onProceed, title, body }) => {
  const ref = React.createRef();

  return (
    <>
      <Modal animation={false} ref={ref} show={true} onHide={onClose}>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{body}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={onClose}>Close</Button>
          <Button variant="primary" onClick={onProceed}>Proceed</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ConfirmationModal;
