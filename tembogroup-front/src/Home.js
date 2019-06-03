import React from 'react'
import { Row, Col, Image, Container} from 'react-bootstrap'
import temboLogo from './img/logo_for_landingpage.png'
import elephant from './img/elephant_forlandingpage.png'
import './index.css';

export const Home = () => (
  <Container>
    <Row className="mt-5 mb-5 justify-content-center">
      <Col xs="auto">
        <Image src={temboLogo} rounded />
      </Col>
    </Row>
    <Row className="mt-5 pt-3 justify-content-center">
      <Col xs="auto">
        <Image src={elephant} fluid/>
      </Col>
    </Row>
    <Row className="mt-5 pt-3 justify-content-center">
      <Col xs="auto">
        <a className='advance' href='/home'>Advance</a>
      </Col>
    </Row>
  </Container>
)
