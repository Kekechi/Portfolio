import React from "react";
import { Container } from "react-bootstrap";

import courseList from "./coursesList";

function Courses() {
  return (
    <div className="courses m-nav">
      <Container className="py-5">
        <h1 className="text-light">Courses</h1>
        {courseList.map((sections) => (
          <div key={sections.section} className="text-light">
            <h2>{sections.section}</h2>
            <ul>
              {sections.courses.map((course) => (
                <li key={course.name}>
                  {course.name} {course?.title}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </Container>
    </div>
  );
}

export default Courses;
