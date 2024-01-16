import React, { useContext } from "react";
import { Container, Nav as BootNav, Navbar } from "react-bootstrap";
import { HashLink } from "react-router-hash-link";
import LangContext from "../../Context/LangContext";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import ScrollProgress from "./ScrollProgress";

function Nav() {
  const lang = useContext(LangContext);
  const location = useLocation();

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
          <BootNav className="flex-row">
            <BootNav.Link
              as={HashLink}
              to={"/en" + location.pathname.slice(3)}
              disabled={lang === "en"}
              className="px-1"
            >
              <div className="lang-switch">
                <img
                  src={"/src/assets/icons/america.svg"}
                  alt=""
                  height="40"
                  className="d-inline-block align-top"
                />
              </div>
            </BootNav.Link>
            <BootNav.Link
              as={HashLink}
              to={"/ja" + location.pathname.slice(3)}
              className="px-1"
              disabled={lang === "ja"}
            >
              <div className="lang-switch">
                <img
                  src={"/src/assets/icons/japan.svg"}
                  alt=""
                  height="40"
                  className="d-inline-block align-top"
                />
              </div>
            </BootNav.Link>
          </BootNav>
        </Navbar.Collapse>
      </Container>
      <ScrollProgress />
    </Navbar>
  );
}

export default Nav;
