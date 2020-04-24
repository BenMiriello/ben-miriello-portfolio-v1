import React from "react";
import { projects } from "../content";

const ProjectCard = ({ proj }) => {

  return (
    <div style={{marginBottom: '20px'}}>
      <div style={{display: 'block', float: 'left'}}>
        <img 
          style={{
            width: "20%",
            minWidth: '200px',
            height: 'auto',
          }}
          src={ require(`../images/${proj.image}.png`) } 
        />
      </div>
      <div style={{display: 'block', float: 'left', width: '60%', height: 'auto'}}>
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
        margin: '0 auto',
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
        <ProjectCard proj={proj} />
      ))}
    </div>
  );
};

export default Projects;
