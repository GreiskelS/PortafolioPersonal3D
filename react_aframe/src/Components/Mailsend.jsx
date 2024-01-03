import React from 'react'
import './css/Contacto.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const Mailsend = () => {
  return (
    <div>
      <h1>Mailsend</h1>
      <div
      id='modalform'
      className="modal show"
      style={{ display: 'block'}}
    >
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>Contact in progress...</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>¡Thanks for your contact! We will in contact zoom.✅✉️ </p>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" href='/contacto'>Close</Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
    </div>
  )
}

export default Mailsend