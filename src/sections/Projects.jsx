import React from "react";
import ProjectCard from "../components/ProjectCard";
import Separator from '../components/Separator'
import { projects } from "../content";

const Projects = (props) => {
  return (
    <div className="main-section">
      <h2>Projects</h2>
      <Separator px="20" />
      {projects.map((proj) => (
        <ProjectCard proj={proj} />
      ))}
    </div>
  );
};

export default Projects;
