import React from "react";
import { Container, Nav as BootNav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <Navbar bg="light" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand as={Link} to="/">
          Keigo Morita Portfolio
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse>
          <BootNav className="me-auto">
            <BootNav.Link as={Link} to="/">
              Home
            </BootNav.Link>
          </BootNav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Nav;
