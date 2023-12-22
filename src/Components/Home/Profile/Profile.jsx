import React from "react";
import { Col, Container, Row } from "react-bootstrap";

function Profile() {
  return (
    <div className="profile" id="profile">
      <Container className="py-5">
        <h1 className="text-light">Profile</h1>
        <Row className="pt-5">
          <Col xs={12} lg={4}>
            <div className="profile-pic">
              <img src="src\assets\img\profile.JPG" alt="" />
            </div>
          </Col>
          <Col xs lg={8}>
            <h2 className="text-light">Keigo Morita</h2>
            <p className="text-light">
              Currently pursuing a Bachelor of Science in Computer Science at
              San Diego State University. Passionate about leveraging web
              development and user experience design to build solutions that
              drive positive societal impact. Developed a website for kids to
              learn the Japanese Language and Culture:{" "}
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
