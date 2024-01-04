import React from "react";
import { Card, Container, Ratio } from "react-bootstrap";
import projectList from "./projectList";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { Link } from "react-router-dom";

function Projects() {
  return (
    <div className="projects">
      <div className="section-anchor" id="projects"></div>
      <Container className="py-5">
        <h1 className="text-light">Projects</h1>
        <ResponsiveMasonry>
          <Masonry>
            {projectList.map((project) => (
              <Link
                key={project.name}
                to={`/project/${project.name}`}
                className="suppress-link"
              >
                <Card className="m-2 project-card">
                  {project.img ? (
                    <div className="project-img">
                      <Card.Img
                        variant="top"
                        src={"/src/assets/img/" + project.img}
                        alt={project.img}
                      />
                    </div>
                  ) : null}

                  <Card.Body>
                    <Card.Title className="">{project.name}</Card.Title>
                    <div className="position-relative">
                      <div className="d-flex z-2 position-absolute show-project">
                        Show Project
                        <img
                          className="arrow-motion"
                          src="/src/assets/icons/arrow-right.svg"
                          alt=""
                        />
                      </div>
                      <div className="z-1 project-card-text">
                        {project.skills}
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </Link>
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </Container>
    </div>
  );
}

export default Projects;
