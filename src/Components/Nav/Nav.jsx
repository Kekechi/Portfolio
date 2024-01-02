import React from "react";
import { Container, Nav as BootNav, Navbar } from "react-bootstrap";
import { HashLink } from "react-router-hash-link";

function Nav() {
  return (
    <Navbar bg="light" expand="lg" fixed="top">
      <Container>
        <Navbar.Brand as={HashLink} to="/#top">
          <b>KeigoM</b>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse>
          <BootNav className="me-auto">
            <BootNav.Link as={HashLink} to="/#top">
              Home
            </BootNav.Link>
            <BootNav.Link as={HashLink} to="/#profile">
              Profile
            </BootNav.Link>
            <BootNav.Link as={HashLink} to="/#projects">
              Projects
            </BootNav.Link>
            <BootNav.Link as={HashLink} to="/#skills">
              Skills
            </BootNav.Link>
            <BootNav.Link as={HashLink} to="/#experience">
              Experience
            </BootNav.Link>
          </BootNav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Nav;
