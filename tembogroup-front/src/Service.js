import React from 'react'
import styled from 'styled-components';
import { Row, Col, Image, Container} from 'react-bootstrap'

import imgRight from './img/picture-not-available.jpg';
import imgLine from './img/dividerLine.png';
import imgBF1 from './img/butterfly1.png';

import {
  NavLink
} from "react-router-dom";

export const Service = () => (
  <Row className='pt-5' fluid>
    <Col sm className='my-auto' sm fluid>
      <Row className="sectionTitle">
        <img src={imgBF1} className="butterflyMenu" alt="imgBF1"/>
        <span>Strategy Management</span>
      </Row>
      <Row className="sectionContent">
        We bring good ideas to life -- guiding them from concept through to execution, launch and impact. We design smart strategies that are grounded in the realities of an organization's capacity to execute them. We help clients navigate complex ecosystems surrounding various causes, and build the necessary networks, knowledge and credibility to operate and launch major initiatives. We identify solutions, codify best practices, develop blueprints to replicate success and help remove barriers to scale. Services include:
        <br/><br/>
        <ul>
          <li><b>organization &amp; program strategy</b></li>
          <li><b>innovation audit &amp; strategy</b></li>
          <li><b>replication &amp; scale strategy</b></li>
          <li><b>network mapping &amp; analysis</b></li>
          <li><b>workshop design &amp; facilitation</b></li>
        </ul>
      </Row>
      <div align="center" className="sectionBack mb-5">
        <span className="textBack"><NavLink to="/home">BACK</NavLink></span>/<span className="textBack"><NavLink to="/home/organization">NEXT</NavLink></span>
      </div>
    </Col>
    <Col className='d-none d-lg-block d-xl-block my-auto' md='auto'>
      <img src={imgLine} alt="imgLine"/> 
    </Col>
    <Col className='text-center' sm fluid>
      <img src={imgRight} className='img-fluid my-auto' fluid/>
    </Col>
  </Row>
)
