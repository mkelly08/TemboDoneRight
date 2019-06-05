import React from 'react'
import { Row, Col, Image, Container} from 'react-bootstrap'
import imgLine from './img/dividerLine.png';
import imgBF1 from './img/butterfly1.png';
import imgBF2 from './img/butterfly2.png';
import imgBF3 from './img/butterfly3.png';
import imgBF4 from './img/butterfly4.png';
import imgBF5 from './img/butterfly5.png';
import imgBF6 from './img/butterfly6.png';
import imgRightServices from './img/WomanPlant.png';
import elephant from './img/elephant_forlandingpage.png'

import Jumbotron from 'react-bootstrap/Jumbotron'
import styled from 'styled-components';

import {
  NavLink
} from "react-router-dom";

const Styles = styled.div`
  .jumbotron {
    background-color: white;
    height: 100%;
    width: 100%;
  }
`;

export const Init = () => (
    <Row fluid>
      <Col sm className='my-auto'>
        <ul className="homeMenu">
          <li className="liHomeMenu">
            <NavLink to="/home/service">
              <img src={imgBF1} className="butterflyMenu" alt="imgBF1"/>
              <span>Strategy Management</span>
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
      </Col>
      <Col className='d-none d-lg-block d-xl-block my-auto' md='auto'>
        <img src={imgLine} alt="imgLine"/> 
      </Col>
      <Col sm='auto' fluid>
        <img src={imgRightServices} className='img-fluid' fluid/>
      </Col>
    </Row>
  )
