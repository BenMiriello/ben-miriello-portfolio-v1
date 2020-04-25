import React from "react";

import content from "../content";

const Headline = (props) => {
  return (
    <div className="main-section headline">
      <img
        className="headshot"
        src={process.env.PUBLIC_URL + "./images/portrait.jpeg"}
        alt="Headshot"
      />
      <div className="headline-text">
        <h1>Ben Miriello</h1>
        <p>{content.tagline}</p>
      </div>
    </div>
  );
};

export default Headline;
