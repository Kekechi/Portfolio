import React, { useContext, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import profileTexts from "./profileTexts";
import LangContext from "../../../Context/LangContext";
import { InView } from "react-intersection-observer";

function Profile() {
  const lang = useContext(LangContext);
  const profileTextsObj = profileTexts[lang];
  const [show, setShow] = useState(false);

  return (
    <InView
      onChange={(inView, entry) => setShow(inView)}
      threshold={0.1}
      className="profile"
    >
      <div className="section-anchor" id="profile"></div>
      <Container className="py-5">
        <div></div>
        <h1 className={"text-light typeIn " + (show ? "show" : "")}>
          {profileTextsObj.title}
        </h1>
        <Row className="pt-5">
          <Col xs={12} lg={4}>
            <div className={"profile-pic fadeIn " + (show ? "show" : "")}>
              <img src="/src/assets/img/profile.JPG" alt="" />
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
      </Container>
    </InView>
  );
}

export default Profile;
