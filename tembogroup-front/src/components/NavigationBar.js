import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';
import imgLogo from "../img/temboGroupLogo.png";

const Styles = styled.div`
  .navbar {
    background-color: #ffffff;
  }

  a, .navbar-brand, .navbar-nav .nav-link {
    color: #000000;
    font-family: 'Loves', 'Georgia', serif;
    font-size: 24px;

    &:hover {
      color: gray;
    }
  }

`;

export const NavigationBar = () => (
  <Styles>
    <Navbar expand="lg">
      <Navbar.Brand href="/home"><img src={imgLogo} className="imgLogo pl-3" alt="imgLogo"/></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto mr-5">
          <Nav.Item>
            <Nav.Link className=''>
              <Link className='pr-3 border-right border-dark' to="/home/service">SERVICES</Link>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>
              <Link className='pr-3 border-right border-dark' to="/home/brain">BRAIN TRUST</Link>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>
              <Link className='pr-3 border-right border-dark' to="/home/careers">CAREERS</Link>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>
              <Link className='pr-3 border-right border-dark' to="/home/about">ABOUT</Link>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>
              <Link to="/home/contact">CONTACT</Link>
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Styles >
)
