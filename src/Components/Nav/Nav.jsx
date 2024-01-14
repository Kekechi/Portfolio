import React, { useContext } from "react";
import { Container, Nav as BootNav, Navbar } from "react-bootstrap";
import { HashLink } from "react-router-hash-link";
import LangContext from "../../Context/LangContext";
import { useLocation } from "react-router-dom";

function Nav() {
  const lang = useContext(LangContext);
  const location = useLocation();

  const [changeLangCode, changeLangImg] =
    "en" === lang ? ["ja", "japan.svg"] : ["en", "america.svg"];

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
          <BootNav>
            <BootNav.Link
              as={HashLink}
              to={"/" + changeLangCode + location.pathname.slice(3)}
            >
              <img
                src={`/src/assets/icons/${changeLangImg}`}
                alt=""
                height="40"
                style={{ border: "3px solid black", borderRadius: "10%" }}
              />
            </BootNav.Link>
          </BootNav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Nav;
