import React from "react";

function LoadAnimation({ children }) {
  return (
    <div>
      <div className="load-screen">
        <div className="load-icon">
          <img src="/img/favicon.png" alt="" />
        </div>
      </div>
      <div className="load-animation-elm"></div>
      <div className="main-container">{children}</div>
    </div>
  );
}

export default LoadAnimation;
