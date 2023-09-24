import React from "react";
import Logo from "./Logo_Rimoldi.svg";

import { Link } from "react-router-dom";

import { Container, Navbar, Nav } from "react-bootstrap";

const NavBar = () => {
  return (
    <>
      <Navbar collapseOnSelect expand='lg' className='navbar navbar-dark'>
        <Container>
          <Navbar.Brand>
            <Link to='/'>
              <img src={Logo} alt="Rimoldi design' logo" />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          <Navbar.Collapse id='responsive-navbar-nav'>
            <Nav className='me-auto'>
              <Link to='/Works' className='nav-link'>
                Works
              </Link>
              <Link to='/WIP' className='nav-link'>
                WIP
              </Link>
              <Link to='/About' className='nav-link'>
                About
              </Link>
              <Link to='/Contact' className='nav-link'>
                Contact
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
     
    </>
    
  );
};

export default NavBar;
