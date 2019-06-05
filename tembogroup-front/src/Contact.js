import React from 'react'
import { Row, Col, Image, Container, Form, Button} from 'react-bootstrap';
import imgLine from './img/dividerLineHor.png';

export const Contact = () => (
  <Container>
    <Form className='my-auto'>
      <Form.Row>
        <Col>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>First Name</Form.Label>
            <Form.Control type="text" placeholder="Enter First Name" />
          </Form.Group>
        </Col>
        <Col>
        <Form.Group controlId="formBasicEmail">
            <Form.Label>Last Name</Form.Label>
            <Form.Control type="text" placeholder="Enter Last Name" />
          </Form.Group>
        </Col>
      </Form.Row>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Subject</Form.Label>
        <Form.Control type="text" placeholder="Enter the subject" />
      </Form.Group>
      <Form.Group controlId="exampleForm.ControlTextarea1">
        <Form.Label>Message</Form.Label>
        <Form.Control as="textarea" rows="7" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Send
      </Button>
    </Form>
  </Container>
)
