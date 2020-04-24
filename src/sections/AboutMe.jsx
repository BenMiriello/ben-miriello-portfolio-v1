import React from "react";
import { aboutMe } from "../content";

const AboutMe = (props) => {
  return (
    <div className="main-section">
      <h2>About Me</h2>
      <div className="narrow">
        <p>{aboutMe}</p>
      </div>
    </div>
  );
};

export default AboutMe;
