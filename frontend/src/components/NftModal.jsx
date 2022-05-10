import React from 'react';
import { Modal, Button } from 'react-bootstrap'

const NftModal = ({show, nft, onHide}) => {

  return (  
    <Modal nft={nft} show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>{nft.name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>This is a modal!</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default NftModal;