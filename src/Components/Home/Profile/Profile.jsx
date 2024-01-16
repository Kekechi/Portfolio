import React, { useContext, useRef, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import profileTexts from "./profileTexts";
import LangContext from "../../../Context/LangContext";
import { useInView } from "framer-motion";

function Profile() {
  const lang = useContext(LangContext);
  const profileTextsObj = profileTexts[lang];
  const ref = useRef(null);
  const show = useInView(ref);

  return (
    <div className="profile">
      <div className="section-anchor" id="profile"></div>

      <Container className="py-5">
        <div ref={ref}>
          <h1 className={"text-light typeIn " + (show ? "show" : "")}>
            {profileTextsObj.title}
          </h1>
          <Row className="pt-5">
            <Col xs={12} lg={4}>
              <div className={"profile-pic fadeIn " + (show ? "show" : "")}>
                <img src="/img/profile.JPG" alt="" />
              </div>
            </Col>
            <Col xs lg={8} className={"flyInRight " + (show ? "show" : "")}>
              <h2 className="text-light">{profileTextsObj.name}</h2>
              <p className="text-light">
                {profileTextsObj.description}
                <a href="https://skgojapanese.com" className="suppress-link">
                  skgojapanese.com
                </a>
              </p>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
}

export default Profile;
