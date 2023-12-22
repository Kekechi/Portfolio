import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import projectList from "./projectList";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

function Projects() {
  return (
    <div className="projects" id="projects">
      <Container className="py-5">
        <h1 className="text-light">Projects</h1>
        <ResponsiveMasonry>
          <Masonry>
            {projectList.map((project) => (
              <Card key={project.name} className="m-2">
                {project.img ? (
                  <Card.Img
                    className="project-img"
                    variant="top"
                    src={"/src/assets/img/" + project.img}
                    alt={project.img}
                  />
                ) : null}

                <Card.Body>
                  <Card.Title
                    className="overflow-hidden nowrap"
                    style={{ textOverflow: "ellipsis" }}
                  >
                    {project.name}
                  </Card.Title>
                  <Card.Text>
                    <div>{project.skills}</div>
                    <p className="d-flex ">
                      Show Project
                      <img
                        className="arrow-motion"
                        src="/src/assets/icons/arrow-right.svg"
                        alt=""
                      />
                    </p>
                  </Card.Text>
                </Card.Body>
              </Card>
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </Container>
    </div>
  );
}

export default Projects;
