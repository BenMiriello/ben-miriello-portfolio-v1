import React from "react";

import { tagline } from "../content";

const Headline = (props) => {
  return (
    <div className="main-section headline">
      <img
        className="headshot"
        src={process.env.PUBLIC_URL + "./images/headshot.png"}
        alt="Headshot"
      />
      <div className="headline-text">
        <h1>Ben Miriello</h1>
        <p>{tagline}</p>
      </div>
    </div>
  );
};

export default Headline;
