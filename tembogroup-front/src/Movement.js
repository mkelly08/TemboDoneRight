import React from 'react'
import { Row, Col, Image, Container} from 'react-bootstrap'

import imgRight from './img/picture-not-available.jpg';
import imgLine from './img/dividerLine.png';
import imgBF5 from './img/butterfly5.png';

import {
  NavLink
} from "react-router-dom";

export const Movement = () => (
  <Row className='pt-5' fluid>
    <Col sm className='mt-md-5'>
      <Container className='pl-md-5 pr-md-5'>
      <Row className="sectionTitle">
        <Image src={imgBF5} className="butterflyMenu pt-1" alt="imgBF1"/>
        <span>Movement Making</span>
      </Row>
      <Row className="sectionContent">
      The scale of challenges humanity faces requires collective action, and often radical shifts in culture and behaviors. Instigating this change means sparking real movements, which can be intentionally built, but must be collectively adopted. It means building narratives that permeate popular media, tied to specific policy and behavior changes. We work with clients to design, build and catalyze movements. Services include:
            <br/><br/>
            <ul>
              <li><b>campaign strategy, branding &amp; execution</b></li>
              <li><b>transmedia storytelling &amp; messaging</b></li>
              <li><b>public affairs &amp; policy</b></li>
              <li><b>PR &amp; communications</b></li>
              <li><b>digital strategy</b></li>
              <li><b>art, design &amp; media</b></li>
            </ul>
      </Row>
      <div align="center" className="sectionBack mb-5">
        <span className="textBack"><NavLink to="/home/partners">BACK</NavLink></span>/<span className="textBack"><NavLink to="/home/content">NEXT</NavLink></span>
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
