import React from "react";
import Skill from "../components/Skill";
import { skillset } from "../content";

const Skills = (props) => {
  return (
    <div className="main-section">
      <h2>
        Skills
      </h2>
      <div className="narrow">
        <ul>
          {skillset.map((name) => (
            <Skill key={name} name={name} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Skills;
