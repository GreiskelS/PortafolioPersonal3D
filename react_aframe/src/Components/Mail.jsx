import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { useForm, ValidationError } from '@formspree/react';
import './css/Contacto.css';
import Mailsend from './Mailsend'


function Mail() {
  const [state, handleSubmit] = useForm("meqbqdro");

  if (state.succeeded) {
    
    return (
      <div>
     <Mailsend />
      </div>
    );
}

  return (
    <div>
      <div className='contacto'>
        <Form className='formBasicEmail' method="POST" onSubmit={handleSubmit}>
          <h1 className='textform'><strong>Contact Us!</strong></h1>
          <p className='textform'>¿Do you want to know more about my career in the world of web programming?</p>
          <Form.Group className="mb-3" controlId="formBasicEmail" >
            <label htmlFor="email">Email Address</label>
            <Form.Control type="email" name="email" placeholder="example@mail.com" required />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
            <Form.Text className="text-muted">
            </Form.Text>
            <label className='message'>
              <textarea className='message' name="message" placeholder='Your message' required></textarea>
            </label>
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
            <br />
            <Button variant="dark" type="submit" id='enviado'>
              <strong>Submit 💾</strong>
            </Button>
            <p className='textform'>¡We will contact you! ✉️ </p>
          </Form.Group>
        </Form>
      </div>

    </div>
  )
}

export default Mail;
