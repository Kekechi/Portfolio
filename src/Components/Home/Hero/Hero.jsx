import React, { useContext } from "react";
import { Container } from "react-bootstrap";
import heroTexts from "./heroTexts";
import LangContext from "../../../Context/LangContext";

export const Hero = () => {
  const lang = useContext(LangContext);
  const heroTextsObj = heroTexts[lang];

  return (
    <div className="hero d-flex flex-column justify-content-center" id="top">
      <Container>
        <h1 className="text-light title">{heroTextsObj.name}</h1>
        <p className="text-light headline">
          {heroTextsObj.university}
          <br /> {heroTextsObj.major}
          <br /> {heroTextsObj.honors}
        </p>
      </Container>
    </div>
  );
};
