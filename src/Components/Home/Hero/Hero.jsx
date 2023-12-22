import React from "react";
import { Container } from "react-bootstrap";

export const Hero = () => {
  return (
    <div className="hero d-flex flex-column justify-content-center" id="top">
      <Container>
        <h1 className="text-light title">Keigo Morita</h1>
        <p className="text-light headline">
          San Diego State University
          <br /> Computer Science Major
          <br /> Weber Honors College
        </p>
      </Container>
    </div>
  );
};
