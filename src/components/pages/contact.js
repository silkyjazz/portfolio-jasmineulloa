import React from "react";
import { useState } from 'react';
import {Fade} from 'react-awesome-reveal';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {Button, Form, Container, Row, Col} from 'react-bootstrap';

export default function Contact() {
  const styles = {
    marginLeft: "60px",
    padding: "40px",
  };
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({});

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!name) {
      setErrors({ ...errors, name: 'Name is required' });
      return;
    }
    if (!email) {
      setErrors({ ...errors, email: 'Email is required' });
      return;
    }
    if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
      setErrors({ ...errors, email: 'Invalid email address' });
      return;
    }
    if (!message) {
      setErrors({ ...errors, message: 'Message is required' });
      return;
    }
       if (!name || !email || !message) {
        setErrors({ ...errors, message: 'Message is required' });
        return;
      }
    console.log('Form submitted:', { name, email, message });
    setName('');
    setEmail('');
    setMessage('');
    setErrors({});
  };
  return (
    <div>
       <Fade direction="left"><h1 style={styles}className="page-title">Contact Me</h1>
      <Container>
        <Row>
          <Col sm={6}>
          <Form onSubmit={handleSubmit} >
                <Form.Group className="mb-3" controlId="formBasicName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Jane Smith"
                    value={name}
                    onChange={handleNameChange}
                    required
                  />
                  {errors.name && <Form.Text className="text-danger">{errors.name}</Form.Text>}
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="email@example.com"
                    value={email}
                    onChange={handleEmailChange}
                    required
                  />
                  {errors.email && <Form.Text className="text-danger">{errors.email}</Form.Text>}
                </Form.Group>

                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                  <Form.Label>Message</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    value={message}
                    onChange={handleMessageChange}
                    required
                  />
                  {errors.message && <Form.Text className="text-danger">{errors.message}</Form.Text>}
                </Form.Group>
                <Button variant="secondary" type="submit">
                  Send
                </Button>
              </Form>
          </Col>
          <Col lg={6} sm={6}>
            <h3>I'd love to hear from you   <FontAwesomeIcon icon="fa-solid fa-heart" /></h3>
            <p style={{fontSize:"13px", margin:"20px"}}>If you have any questions or comments about my work, please don't hesitate to reach out. You can find my email and social media links on this page as well. I look forward to collaborating!</p>
          </Col>
        </Row>
      </Container></Fade>
    </div>
  );
}
