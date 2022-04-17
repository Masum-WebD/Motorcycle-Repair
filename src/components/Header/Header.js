import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";

const Header = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
        <Container>
          <Navbar.Brand href="#home">Motorcycle-Repair</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#services">Services</Nav.Link>
              <Nav.Link href="#blog">Blog</Nav.Link>
              
            </Nav>
            <Nav>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link  href="#login">Login </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;