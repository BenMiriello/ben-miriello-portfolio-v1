import React from "react";
import TechIcon from './TechIcon'

const ProjectCard = ({ project }) => {

  const technologies = () => {
    project.technologies.map(name => {
      return <TechIcon iconName={name} />
    })
  }
  
  return (
    <div className="project-card">
      <div className="project-image-container hide-before-mobile">
        <div className="project-image-container">
          <img
            className="project-image"
            src={process.env.PUBLIC_URL + `../images/${project.image}.jpg`}
          />
        </div>
      </div>
      <div className="project-details">
        <h3>{project.name}</h3>
        <p className="project-description">{project.description}</p>
        <div>
          {project.technologies.map(name => 
            <TechIcon iconName={name} />
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
