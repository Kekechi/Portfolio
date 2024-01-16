import React, { useContext } from "react";
import { Accordion, Col, Container, Image, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import LangContext from "../../../Context/LangContext";

function Education() {
  const lang = useContext(LangContext);
  return (
    <div className="education">
      <div className="section-anchor" id="education"></div>
      <Container className="py-5">
        <Row>
          <Col md={6}>
            <div className="text-light">
              <h1 className="text-light">Education</h1>
              <h6>
                San Diego State University <br />
                Weber Honors College
              </h6>
              <p>Expected Graduation: May 2027 </p>
              <p>
                Bachelor of Science in Computer Science <br />
                Minor in Interdisciplinary Studies
              </p>
            </div>
            <Link
              className="suppress-link text-light text-decoration-underline"
              to={`/${lang}/courses`}
            >
              View Courses
            </Link>
          </Col>
          <Col md={6}>
            <Image
              src="/img/sdsu.jpg"
              rounded
              fluid
              className="border border-3"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Education;
