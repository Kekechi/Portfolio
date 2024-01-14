import React, { useContext } from "react";
import { Container, Nav as BootNav, Navbar } from "react-bootstrap";
import { HashLink } from "react-router-hash-link";
import LangContext from "../../Context/LangContext";

function Nav() {
  const lang = useContext(LangContext);

  return (
    <Navbar bg="light" expand="lg" fixed="top">
      <Container>
        <Navbar.Brand as={HashLink} to={`/${lang}/#top`}>
          <img
            alt=""
            src="/src/assets/img/favicon.png"
            width="40"
            height="40"
            className="d-inline-block align-center"
          />{" "}
          <b>Keigo M</b>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse>
          <BootNav className="me-auto">
            <BootNav.Link as={HashLink} to={`/${lang}/#top`}>
              Home
            </BootNav.Link>
            <BootNav.Link as={HashLink} to={`/${lang}/#profile`}>
              Profile
            </BootNav.Link>
            <BootNav.Link as={HashLink} to={`/${lang}/#projects`}>
              Projects
            </BootNav.Link>
            <BootNav.Link as={HashLink} to={`/${lang}/#skills`}>
              Skills
            </BootNav.Link>
            <BootNav.Link as={HashLink} to={`/${lang}/#experience`}>
              Experience
            </BootNav.Link>
          </BootNav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Nav;
