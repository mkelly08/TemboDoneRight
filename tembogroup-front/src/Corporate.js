import React from 'react'
import styled from 'styled-components';
import { Row, Col, Image, Container} from 'react-bootstrap'

import imgRight from './img/picture-not-available.jpg';
import imgLine from './img/dividerLine.png';
import imgBF3 from './img/butterfly3.png';

import {
  NavLink
} from "react-router-dom";

export const Corporate = () => (
  <Row className='pt-5' fluid>
    <Col sm className='my-auto' sm fluid>
      <Row className="sectionTitle">
        <img src={imgBF3} className="butterflyMenu" alt="imgBF1"/>
        <span>Corporate Citizenship</span>
      </Row>
      <Row className="sectionContent">
        The Scale of challenges humanity faces requires collective action, and often radical shifts in culture and behavior. Instigating this change means sparking real movements, which can be intentionally built, but must be collectively adopted. It means building narratives that permeate popular media, tied to specific policy and behavior changes. We work with clients to design, build anc catalyze movements. Services include:
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
        <span className="textBack"><NavLink to="/home/organization">BACK</NavLink></span>/<span className="textBack"><NavLink to="/home/partners">NEXT</NavLink></span>
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
