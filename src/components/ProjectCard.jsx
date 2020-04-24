import React from "react";

const ProjectCard = ({ proj }) => {
  return (
    <div className="row">
      <div className="col span-2-of-4">
        <img
          className="project-card-image"
          src={process.env.PUBLIC_URL + `../images/${proj.image}.jpg`}
        />
      </div>
      <div className="col span-2-of-4">
        <h3>{proj.name}</h3>
      </div>
    </div>
  );
};

export default ProjectCard;
