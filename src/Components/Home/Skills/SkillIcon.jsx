import React, { useEffect, useRef, useState } from "react";
import { Col, Image } from "react-bootstrap";

function SkillIcon({ icon, name, index, show }) {
  return (
    <div
      className={"skill-icon scaleIn " + (show ? "show" : "")}
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
