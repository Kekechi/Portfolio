import React, { useRef, useState } from "react";
import { Col, Row } from "react-bootstrap";
import SkillIcon from "./SkillIcon";
import { useInView } from "framer-motion";

function SkillList({ list, title }) {
  const ref = useRef(null);
  const show = useInView(ref);

  return (
    <>
      <h2 className={"text-light pt-2 typeIn " + (show ? "show" : "")}>
        {title}
      </h2>

      <div ref={ref}>
        <Row className="skill-row">
          {list.map((skill, index) => (
            <Col className="my-1" xs={2} key={skill.name}>
              <SkillIcon index={index} show={show} {...skill} />
            </Col>
          ))}
        </Row>
      </div>
    </>
  );
}

export default SkillList;
