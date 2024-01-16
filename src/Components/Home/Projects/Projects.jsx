import React, { useContext, useState } from "react";
import { Container } from "react-bootstrap";
import projectList from "./projectList";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import LangContext from "../../../Context/LangContext";
import ProjectCard from "./ProjectCard";
import { InView } from "react-intersection-observer";

function Projects() {
  const lang = useContext(LangContext);
  const [show, setShow] = useState(false);

  return (
    <div className="projects">
      <div className="section-anchor" id="projects"></div>
      <Container className="py-5">
        <InView onChange={(inView, entry) => setShow(inView)}>
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
        </InView>
      </Container>
    </div>
  );
}

export default Projects;
