import React from 'react'
import { Row, Col, Image, Container} from 'react-bootstrap';
import imgLine from './img/dividerLineHor.png';

export const Careers = () => (
  <Container>
    <Row className='justify-content-center' fluid>
      <h2 className='text-center'>Joing our team of smart. passionate. diverse. idealist</h2>
      <h2 className='text-center'>who are on a mission to change the world</h2>
    </Row>
    <p className='text-center font-italic'><small>February 25, 2016</small></p>
    <Row className='justify-content-center mt-5 pb-5' fluid>
      <p>dynamic Content</p>
    </Row>
    <Row className='justify-content-center mt-5 pb-5' fluid>
      <p className='text-center'>Are you intrested in somthing short-term or part-time?<br/>
      Tembo is always looking for whip smart consultants to join specific projects, and have a rolling internship program.<br/>
      If you are intrested in eather opportunity please submit a letter of intrest and CV to<br/>
      jobs@tembogroup.com</p>
    </Row>
  </Container>
)
