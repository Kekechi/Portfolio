import React, { useContext, useRef, useState } from "react";
import { Container } from "react-bootstrap";
import projectList from "./projectList";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import LangContext from "../../../Context/LangContext";
import ProjectCard from "./ProjectCard";
import { useInView } from "framer-motion";

function Projects() {
  const lang = useContext(LangContext);
  const ref = useRef(null);

  const show = useInView(ref);

  return (
    <div className="projects">
      <div className="section-anchor" id="projects"></div>
      <Container className="py-5">
        <div ref={ref}>
          <h1 className={"text-light typeIn " + (show ? "show" : "")}>
            Projects
          </h1>
          <ResponsiveMasonry>
            <Masonry>
              {projectList.map((project, index) => (
                <ProjectCard
                  project={project}
                  show={show}
                  index={index}
                  key={project.name}
                />
              ))}
            </Masonry>
          </ResponsiveMasonry>
        </div>
      </Container>
    </div>
  );
}

export default Projects;
