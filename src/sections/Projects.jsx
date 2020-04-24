import React from "react";
import { projects } from "../content";

const Project = ({ proj }) => {

  return (
    <div>
      <div>
        <img 
          style={{
            width: "200px",
            height: 'auto',
          }}
          src={ require(`../images/${proj.image}.png`) } />
      </div>
      <div>
        <h3>{proj.name}</h3>
      </div>
    </div>
  );
};

const Projects = (props) => {
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
        Projects
      </h1>
      {projects.map((proj) => (
        <Project proj={proj} />
      ))}
    </div>
  );
};

export default Projects;
