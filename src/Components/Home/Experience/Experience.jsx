import React from "react";
import { Col, Container, Row } from "react-bootstrap";

import experienceList from "./experienceList";

function Experience() {
  return (
    <div className="experience">
      <div className="section-anchor" id="experience"></div>
      <Container className="py-5">
        <h1 className="text-light">Experience</h1>

        <Row>
          {experienceList.map((experience) => (
            <Col lg={4} key={experience.title}>
              <div className="experience-card">
                <div className="experience-card-background">
                  <img src={"src/assets/img/" + experience.img} alt="" />
                </div>

                <div className="experience-card-content">
                  <h6>{experience.position}</h6>
                  <p>{experience.date}</p>
                  <p>{experience.description}</p>
                </div>
                <h4 className="experience-title">{experience.title}</h4>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default Experience;
