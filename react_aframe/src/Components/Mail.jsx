import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './css/Contacto.css';

const Mail = () => {

  return (

    <div className='contacto'>
     
      <Form className='formBasicEmail' action="https://formspree.io/f/meqbqdro"
        method="POST">
        <h1 className='textform'><strong>Contact Us!</strong></h1>
        <p className='textform'>¿Do you want to know more about my career in the world of web programming?</p>
        <p className='textform'>¡I will contact you! ✉️ </p>
        <Form.Group className="mb-3" controlId="formBasicEmail" >
        <label htmlFor="email">Email Address</label>
          <Form.Control type="email" name="email" placeholder="example@mail.com" required />
          <Form.Text className="text-muted">
          </Form.Text>
          <label className='message'>
          <textarea className='message' name="message" placeholder='Your message'></textarea>
        </label>
        <br />
        <Button variant="dark" type="submit" id='enviado'>
          <strong>Submit 💾</strong>
        </Button>
        </Form.Group>
       
      </Form>
    </div>

  )
}

export default Mail

