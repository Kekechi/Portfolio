import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import skillLists from "./skillLists";

function Skills() {
  return (
    <div className="skills">
      <div className="section-anchor" id="skills"></div>
      <Container className="py-5">
        <h1 className="text-light">Skills</h1>
        <Row>
          <Col sm={12} md={6}>
            <h2 className="text-light pt-2">Programming Languages</h2>
            <Row className="skill-row">
              {skillLists.languages.map((language) => (
                <Col className="my-1" xs={2} key={language.name}>
                  <div className="skill-icon">
                    <div>
                      <Image
                        src={`/src/assets/icons/${language.icon}`}
                        alt=""
                      />
                    </div>
                    <h6 className="text-center">{language.name}</h6>
                  </div>
                </Col>
              ))}
            </Row>
            <h2 className="text-light pt-2">Frameworks</h2>
            <Row className="skill-row">
              {skillLists.frameworks.map((framework, index) => (
                <Col className="my-1" xs={2} key={framework.name}>
                  <div className="skill-icon">
                    <div>
                      <Image
                        src={`/src/assets/icons/${framework.icon}`}
                        alt=""
                      />
                    </div>
                    <h6 className="text-center">{framework.name}</h6>
                  </div>
                </Col>
              ))}
            </Row>
            <h2 className="text-light pt-2">Database</h2>
            <Row className="skill-row">
              {skillLists.databases.map((database, index) => (
                <Col className="my-1" xs={2} key={database.name}>
                  <div className="skill-icon">
                    <div>
                      <Image
                        src={`/src/assets/icons/${database.icon}`}
                        alt=""
                      />
                    </div>
                    <h6 className="text-center">{database.name}</h6>
                  </div>
                </Col>
              ))}
            </Row>
            <h2 className="text-light pt-2">Languages</h2>
            <Row className="skill-row">
              {skillLists.others.map((other, index) => (
                <Col className="my-1" xs={2} key={other.name}>
                  <div className="skill-icon">
                    <div>
                      <Image src={`/src/assets/icons/${other.icon}`} alt="" />
                    </div>
                    <h6 className="text-center">{other.name}</h6>
                  </div>
                </Col>
              ))}
            </Row>
          </Col>
          <Col sm={12} md={6}>
            <h2 className="text-light pt-2">Tools</h2>
            <Row className="skill-row">
              {skillLists.tools.map((tool, index) => (
                <Col className="my-1" xs={2} key={tool.name}>
                  <div className="skill-icon">
                    <div>
                      <Image src={`/src/assets/icons/${tool.icon}`} alt="" />
                    </div>
                    <h6 className="text-center">{tool.name}</h6>
                  </div>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Skills;
