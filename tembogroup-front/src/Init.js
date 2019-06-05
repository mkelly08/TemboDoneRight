import React from 'react'
import { Row, Col, Container} from 'react-bootstrap'
import imgLine from './img/dividerLine.png';
import imgBF1 from './img/butterfly1.png';
import imgBF2 from './img/butterfly2.png';
import imgBF3 from './img/butterfly3.png';
import imgBF4 from './img/butterfly4.png';
import imgBF5 from './img/butterfly5.png';
import imgBF6 from './img/butterfly6.png';
import imgRightServices from './img/womanplant_resized.png';

import {
  NavLink
} from "react-router-dom";

export const Init = () => (
    <Row className="justify-content-md-center pt-5 mt-5">
      <Col md className='my-auto ml-lg-5'>
        <Container>
        <ul className="homeMenu">
          <li className="liHomeMenu">
            <NavLink to="/home/service">
              <img src={imgBF1} className="butterflyMenu" alt="imgBF1"/>
              <span>Strategy &amp; Management</span>
            </NavLink>
          </li>
          <li className="liHomeMenu">
            <NavLink to="/home/organization">
              <img src={imgBF2} className="butterflyMenu" alt="imgBF2"/>
              <span>Organizational Design</span>
            </NavLink>
          </li>
          <li className="liHomeMenu">
            <NavLink to="home/corporate">
              <img src={imgBF3} className="butterflyMenu" alt="imgBF3"/>
              <span>Corporate Citizenship</span>
            </NavLink>
          </li>
          <li className="liHomeMenu">
            <NavLink to="/home/partners">
              <img src={imgBF4} className="butterflyMenu" alt="imgBF4"/>
              <span>Partnerships &amp; Coalitions</span>
            </NavLink>
          </li>
          <li className="liHomeMenu">
            <NavLink to="/home/movement">
              <img src={imgBF5} className="butterflyMenu" alt="imgBF5"/>
              <span>Movement Making</span>
            </NavLink>
          </li>
          <li className="liHomeMenu">
            <NavLink to="/home/content">
              <img src={imgBF6} className="butterflyMenu" alt="imgBF6"/>
              <span>Content &amp; Thought Leadership</span>
            </NavLink>
          </li>
        </ul>
        </Container>
      </Col>
      <Col className='d-none d-lg-block d-xl-block my-auto' md='auto'>
        <img src={imgLine} alt="imgLine"/> 
      </Col>
      <Col md className='text-center' fluid>
        <img src={imgRightServices} className='img-fluid my-auto' alt='elephant' fluid/>
      </Col>
    </Row>
  )
