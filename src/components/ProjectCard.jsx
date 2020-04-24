import React from "react";
import Separator from "./Separator";

const ProjectCard = ({ proj }) => {
  return (
    <div className="section group project-card">
      <div className="col span-4-of-12 hide-in-mobile">
        <div className="project-image-container">
          <img
            className="project-image"
            src={process.env.PUBLIC_URL + `../images/${proj.image}.jpg`}
          />
        </div>
      </div>
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
