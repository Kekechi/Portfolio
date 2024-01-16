import React, { useEffect, useRef, useState } from "react";
import { Col, Image } from "react-bootstrap";

function SkillIcon({ icon, name, index, show }) {
  //   const skillIcon = useRef();
  //   const [show, setShow] = useState(false);

  //   useEffect(() => {
  //     const observer = new IntersectionObserver((entries) => {
  //       const [entry] = entries;
  //       entry.isIntersecting ? setShow(true) : setShow(false);
  //     });

  //     observer.observe(skillIcon.current);

  //     return () => {
  //       if (skillIcon.current) observer.unobserve(skillIcon.current);
  //     };
  //   }, []);

  return (
    <div
      className={"skill-icon " + (show ? "show" : "")}
      style={{ "--i": index }}
    >
      <div>
        <Image src={`/src/assets/icons/${icon}`} alt="" />
      </div>
      <h6 className="text-center">{name}</h6>
    </div>
  );
}

export default SkillIcon;
