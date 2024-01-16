import React, { useContext } from "react";
import { Col, Container, Row } from "react-bootstrap";
import skillLists from "./skillLists";
import SkillIcon from "./SkillIcon";
import LangContext from "../../../Context/LangContext";
import skillTexts from "./skillTexts";
import SkillList from "./SkillList";

function Skills() {
  const lang = useContext(LangContext);
  const skillTextsObj = skillTexts[lang];

  return (
    <div className="skills">
      <div className="section-anchor" id="skills"></div>
      <Container className="py-5">
        <h1 className="text-light">{skillTextsObj.title}</h1>
        <Row>
          <Col sm={12} md={6}>
            <SkillList {...skillTextsObj.languages} />
            <SkillList {...skillTextsObj.frameworks} />
            <SkillList {...skillTextsObj.databases} />
            <SkillList {...skillTextsObj.others} />
          </Col>
          <Col sm={12} md={6}>
            <SkillList {...skillTextsObj.tools} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Skills;
