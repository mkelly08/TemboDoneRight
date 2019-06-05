import React from 'react'
import styled from 'styled-components';
import { Row, Col, Image, Container} from 'react-bootstrap'

import imgRight from './img/picture-not-available.jpg';
import imgLine from './img/dividerLine.png';
import imgBF5 from './img/butterfly6.png';

import {
  NavLink
} from "react-router-dom";

export const Content = () => (
  <Row className='pt-5' fluid>
    <Col sm className='my-auto' sm fluid>
      <Row className="sectionTitle">
        <img src={imgBF5} className="butterflyMenu" alt="imgBF1"/>
        <span>Content &amp; Thought Leadership</span>
      </Row>
      <Row className="sectionContent">
        Leading in the 21st century requires that we catalyze conversations, shape debates, and create the frames through which people digest information. At Tembo, we work closely with clients to articulate their points of view, and translate their perspectives into influential content, and distribute that content across the most relevant channels. Services include:
        <br/><br/>
        <ul>
          <li><b>content, theme &amp; platform strategy</b></li>
          <li><b>content creation &amp; distribution,</b> including bespoke publications &amp; platforms</li>
          <li><b>executive positioning,</b> including event strategy, speechwriting, digital personas &amp; media/presentation training</li>
          <li><b>knowledge &amp; research</b></li>
          <li><b>reputation risk management</b></li>
        </ul>
      </Row>
      <div align="center" className="sectionBack mb-5">
        <span className="textBack"><NavLink to="/home/movement">BACK</NavLink></span>/<span className="textBack"><NavLink to="/home">HOME</NavLink></span>
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
