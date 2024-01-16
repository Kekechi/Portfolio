import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import SkillIcon from "./SkillIcon";
import { InView } from "react-intersection-observer";

function SkillList({ list, title }) {
  const [show, setShow] = useState(false);

  return (
    <>
      <h2 className={"text-light pt-2 typeIn " + (show ? "show" : "")}>
        {title}
      </h2>

      <InView onChange={(inView, entry) => setShow(inView)}>
        <Row className="skill-row">
          {list.map((skill, index) => (
            <Col className="my-1" xs={2} key={skill.name}>
              <SkillIcon index={index} show={show} {...skill} />
            </Col>
          ))}
        </Row>
      </InView>
    </>
  );
}

export default SkillList;
