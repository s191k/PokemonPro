import React from 'react';
import s from './Header.module.scss';
import { Navbar,Nav } from 'react-bootstrap'

// https://react-bootstrap.github.io/components/

const Header = () => {
  return (
    <>
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Navbar.Brand href="#home">
        <img src='https://cdn.freebiesupply.com/images/large/2x/pokemon-logo-black-transparent.png'/>
        {/* <img src='./img/pokemon-logo.png' /> */}
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav>
          <Nav.Link href="#deets">Home</Nav.Link>
          <Nav.Link href="#deets">Pokedex</Nav.Link>
          <Nav.Link href="#deets">Legendaries</Nav.Link>
          <Nav.Link href="#deets">Documentation</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    </>
  )
};

export default Header;
