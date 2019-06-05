import React from 'react';
import { Row, Col, Image, Container} from 'react-bootstrap'

import imgRight from './img/picture-not-available.jpg';
import imgLine from './img/dividerLine.png';
import imgBF4 from './img/butterfly4.png';

import {
  NavLink
} from "react-router-dom";

export const Partners = () => (
  <Row className='pt-5' fluid>
    <Col sm className='mt-md-5'>
      <Container className='pl-md-5 pr-md-5'>
      <Row className="sectionTitle">
        <Image src={imgBF4} className="butterflyMenu pt-1" alt="imgBF1"/>
        <span>Partnerships &amp; Coalitions</span>
      </Row>
      <Row className="sectionContent">
      Solving the world's most intractable societal ails cannot be done in isolation, and while partnerships used to be a novel idea, today they are an operational requirement. At Tembo, we have built a proprietary system for analyzing, mapping, engaging and managing partnerships and coalitions. For each of our clients, we ensure your work is not duplicating efforts, but rather helping to lift up our collective efforts for optimal impact and return on investment. Services include:
            <br/><br/>
            <ul>
              <li><b>ecosystem mapping</b></li>
              <li><b>partnership strategy</b></li>
              <li><b>coalition building</b></li>
              <li><b>matchmaking</b></li>
              <li><b>structure &amp; management</b></li>
            </ul>
      </Row>
      <div align="center" className="sectionBack mb-5">
        <span className="textBack"><NavLink to="/home/corporate">BACK</NavLink></span>/<span className="textBack"><NavLink to="/home/movement">NEXT</NavLink></span>
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
