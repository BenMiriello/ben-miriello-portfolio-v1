import React from "react";
import Separator from "./Separator";

const ProjectCard = ({ proj }) => {
  return (
    <div className="section group project-card">
      <div className="col span-4-of-12 project-grid-image-container">
        <div className="project-image-container">
          <img
            className="project-image"
            src={process.env.PUBLIC_URL + `../images/${proj.image}.jpg`}
          />
        </div>
      </div>
      <Separator px="20" />
      <div className="col span-8-of-12">
        <div className="project-details">
          <h3>{proj.name}</h3>
          <p className="project-description">{proj.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
