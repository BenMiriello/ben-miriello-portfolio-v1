import React from "react";
import Icon from './Icon'

const Project = ({ selectedSkills, project }) => {
  
  const technologies = () => {
    return project.technologies.map(name => {
      if (selectedSkills.includes(name)) {
        return <Icon iconName={name} selected inProject />
      }
      return <Icon iconName={name} />
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
          {technologies()}
        </div>
      </div>
    </div>
  );
};

export default Project;
