import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import skillLists from "./skillLists";

function Skills() {
  return (
    <div id="skills" className="skills">
      <Container className="py-5">
        <h1 className="text-light">Skills</h1>

        <Row>
          <Col sm={12} md={6}>
            <h2 className="text-light pt-2">Programming Languages</h2>
            <Row>
              {skillLists.languages.map((language, index) => (
                <Col key={index} sm={6} md={12} lg={6}>
                  <li className="text-light skill-items text-nowrap">
                    {language}
                  </li>
                </Col>
              ))}
            </Row>
            <h2 className="text-light pt-2">Frameworks</h2>
            <Row>
              {skillLists.frameworks.map((framework, index) => (
                <Col key={index} sm={6} md={12} lg={6}>
                  <li className="text-light skill-items text-nowrap">
                    {framework}
                  </li>
                </Col>
              ))}
            </Row>
            <h2 className="text-light pt-2">Database</h2>
            <Row>
              {skillLists.databases.map((database, index) => (
                <Col key={index} sm={6} md={12} lg={6}>
                  <li className="text-light skill-items text-nowrap">
                    {database}
                  </li>
                </Col>
              ))}
            </Row>
            <h2 className="text-light pt-2">Others</h2>
            <Row>
              {skillLists.others.map((other, index) => (
                <Col key={index} sm={6} md={12} lg={6}>
                  <li className="text-light skill-items  text-nowrap">
                    {other}
                  </li>
                </Col>
              ))}
            </Row>
          </Col>
          <Col sm={12} md={6}>
            <h2 className="text-light pt-2">Tools</h2>
            <Row>
              {skillLists.tools.map((tool, index) => (
                <Col key={index} sm={6} md={12} lg={6}>
                  <li className="text-light skill-items text-nowrap">{tool}</li>
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
