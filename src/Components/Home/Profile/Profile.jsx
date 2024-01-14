import React, { useContext } from "react";
import { Col, Container, Row } from "react-bootstrap";
import profileTexts from "./profileTexts";
import LangContext from "../../../Context/LangContext";

function Profile() {
  const lang = useContext(LangContext);
  const profileTextsObj = profileTexts[lang];

  return (
    <div className="profile">
      <div className="section-anchor" id="profile"></div>
      <Container className="py-5">
        <h1 className="text-light">{profileTextsObj.title}</h1>
        <Row className="pt-5">
          <Col xs={12} lg={4}>
            <div className="profile-pic">
              <img src="/src/assets/img/profile.JPG" alt="" />
            </div>
          </Col>
          <Col xs lg={8}>
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
    </div>
  );
}

export default Profile;
