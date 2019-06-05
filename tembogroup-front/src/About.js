import React from 'react'
import { Row, Col, Image, Container} from 'react-bootstrap'
import imgLine from './img/dividerLine.png';
import elephant from './img/elephant.png';
import {
  NavLink
} from "react-router-dom";

export const About = () => (
  <Container fluid>
  <Row className='pt-5' fluid>
  <Col sm className='mt-md-5'>
      <Container className='pl-md-5 pr-md-5'>
      <Row className="sectionContent">
        The Tembo Group is a social impact advisory firm.
            <br/><br/>
            We provide strategic support to philanthropists, companies and non-profits with the resources, scale or ideas to solve the world’s most pressing challenges. We bring together the strongest minds and managers with the deepest rolodexes, and constellate teams with the experience and wherewithal to get any job done. We lead good intentions to great ideas - moving them from concept through to execution, launch and impact. We are motivated solely by our desire to safeguard our planet, and build safe, healthy, equitable societies.
            <br/><br/>
            TEM-bo is Swahili for elephant, the most intelligent keystone species, known to have a disproportionate positive impact on their environment. 
            To learn more about our name,<NavLink to="/home/whyus">CLICK HERE.</NavLink>
            <br/><br/>
      </Row>
      </Container>
    </Col>
    <Col className='d-none d-lg-block d-xl-block my-auto' md='auto'>
      <Image src={imgLine} alt="imgLine"/> 
    </Col>
    <Col className='text-center' sm fluid>
      <Image src={elephant} className='img-fluid my-auto' fluid/>
    </Col>
  </Row>
  <Row className="float-right mr-5" fluid>
  The Tembo Group<br/>
  41 Flatbush Avenue<br/>
  Brooklyn, NY 11217<br/>
  info@tembogroup.org
  </Row>
  </Container>
)