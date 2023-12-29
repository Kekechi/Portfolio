import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";

function Experience() {
  return (
    <div className="experience">
      <div className="section-anchor" id="experience"></div>
      <Container className="py-5">
        <h1 className="text-light">Experience</h1>
        <Row>
          <Col lg={4}>
            <div className="experience-card">
              <div className="experience-card-background">
                <img src="src/assets/img/cdt.png" alt="" />
              </div>

              <div className="experience-card-content">
                <h6>Position: Member</h6>
                <p>September 2023 - Present</p>
                <p>
                  Expand knowledge involving preserving confidentiality,
                  integrity, and availability of information. Information
                  security professionals and students with experience in
                  multiple cybersecurity fields provide instruction. Chosen to
                  compete at the CCDC invitational on 11/4/23.
                </p>
              </div>
              <h4 className="experience-title">Cyber Defense Team</h4>
            </div>
          </Col>
          <Col lg={4}>
            <div className="experience-card">
              <div className="experience-card-background">
                <img src="src/assets/img/newspicks.png" alt="" />
              </div>

              <div className="experience-card-content">
                <h6>Position: 5th Gen Student Picker</h6>
                <p>September 2023 - Present</p>
                <p>
                  NewsPicks aggregates news from 90 global sources and presents
                  insights from 300+ "pro-pickers" and "student pickers" to its
                  7.9 million users. Comment on news and original articles, and
                  collaborate closely with the community team.
                </p>
              </div>
              <h4 className="experience-title">NewsPicks</h4>
            </div>
          </Col>
          <Col lg={4}>
            <div className="experience-card">
              <div className="experience-card-background">
                <img src="src/assets/img/skgoicon.png" alt="" />
              </div>

              <div className="experience-card-content">
                <h6>Position: Volunteer Leader</h6>
                <p>May 2022 - Present</p>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Rerum qui ipsa nemo perferendis tenetur est, totam quidem
                  aliquid obcaecati deleniti. Iusto assumenda rerum ad sunt
                  tempora laborum quisquam voluptatum ratione.
                </p>
              </div>
              <h4 className="experience-title">SKGOJapanese</h4>
            </div>
          </Col>
          <Col lg={4}>
            <div className="experience-card">
              <div className="experience-card-background">
                <img src="src/assets/img/jci.png" alt="" />
              </div>

              <div className="experience-card-content">
                <h6>Position: IT Volunteer</h6>
                <p>March 2020 - Present</p>
                <p>
                  Advised students on online learning tools and strategies.
                  Assisted with instructional activities and assessments in
                  virtual classes.
                </p>
              </div>
              <h4 className="experience-title">GVJCI Language School</h4>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Experience;
