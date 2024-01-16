import React, { useContext } from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import LangContext from "../../../Context/LangContext";

function ProjectCard({ project, show, index }) {
  const lang = useContext(LangContext);

  return (
    <Link
      to={`/${lang}/project/${project.name}`}
      className={"suppress-link blurIn flyInLeft " + (show ? "show" : "")}
      style={{ "--i": index % 3, "--i-mul": "0.2s", zIndex: 100 - index }}
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
            <div className="z-1 project-card-text">{project.skills}</div>
          </div>
        </Card.Body>
      </Card>
    </Link>
  );
}

export default ProjectCard;
