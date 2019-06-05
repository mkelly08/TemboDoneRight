import React from 'react'
import { Row, Col, Image, Container} from 'react-bootstrap'

import imgRight from './img/picture-not-available.jpg';
import imgLine from './img/dividerLine.png';
import imgBF2 from './img/butterfly2.png';

import {
  NavLink
} from "react-router-dom";

export const Organization = () => (
  <Row className='pt-5' fluid>
    <Col sm className='mt-md-5'>
      <Container className='pl-md-5 pr-md-5'>
        <Row className="sectionTitle">
          <Image src={imgBF2} className="butterflyMenu pt-1" alt="imgBF1"/>
          <span>Organizational Design</span>
        </Row>
        <Row className="sectionContent">
        Companies are at the front line of the defining challenges of the next century and are playing a disproportionate role in shaping the world we live in. Navigating their role and relationships in society is a complex endeavor and one that requires flexibility, innovation and partnership. We work with corporate clients to put and keep them at the leading edge of social and economic transformation, while carefully managing reputation risks and opportunities. Services include:
            <br/><br/>
            <ul>
              <li><b>campaign strategy, branding &amp; execution </b>including business integration, c-suite and board communications & reputation management</li>
              <li><b>corporate foundation</b> design, strategy + programs</li>
              <li><b>employee engagement</b></li>
              <li><b>cause marketing, </b>including branded campaigns, celebrity engagement & transmedia storytelling</li>
              <li><b>partnerships &amp; coalition building</b></li>
              <li><b>risk management</b></li>
            </ul>
        </Row>
        <div align="center" className="sectionBack mb-5">
          <span className="textBack"><NavLink to="/home/service">BACK</NavLink></span>/<span className="textBack"><NavLink to="/home/corporate">NEXT</NavLink></span>
        </div>
      </Container>
    </Col>
    <Col className='d-none d-lg-block d-xl-block my-auto' md='auto'>
      <Image src={imgLine} alt="imgLine"/> 
    </Col>
    <Col className='text-center' sm fluid>
      <Image src={imgRight} className='img-fluid my-auto' fluid/>
    </Col>
  </Row>
)
