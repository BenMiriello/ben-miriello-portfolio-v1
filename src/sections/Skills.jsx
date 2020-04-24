import React from "react";
import Skill from "./Skill";
import { skillset } from "../content";

const Skills = (props) => {
  return (
    <div
      style={{
        margin: "auto",
        width: "85%",
        maxWidth: "850px",
      }}
    >
      <h1
        style={{
          margin: "auto",
          textAlign: "center",
        }}
      >
        Skills
      </h1>
      <div style={{ margin: "auto" }}>
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
