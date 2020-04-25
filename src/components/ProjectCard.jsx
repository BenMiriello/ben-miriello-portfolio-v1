import React from "react";

import { ReactComponent as CSS3Icon } from "../vendors/devicons/css3/css3-original.svg";
import { ReactComponent as HTML5Icon } from "../vendors/devicons/html5/html5-original.svg";
import { ReactComponent as JSIcon } from "../vendors/devicons/javascript/javascript-original.svg";
import { ReactComponent as PGIcon } from "../vendors/devicons/postgresql/postgresql-original.svg";
import { ReactComponent as RailsIcon } from "../vendors/devicons/rails/rails-plain.svg";
import { ReactComponent as ReactIcon } from "../vendors/devicons/react/react-original.svg";
import { ReactComponent as ReduxIcon } from "../vendors/devicons/redux/redux-original.svg";
import { ReactComponent as RubyIcon } from "../vendors/devicons/ruby/ruby-original.svg";

const ProjectIcon = ({ Icon, classes }) => {
  return (
    <div className="project-icon-button">
      <div className="project-icon-container">
        <Icon className={"project-tech-icon" + classes} />
      </div>
    </div>
  )
}

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
          <div>
            <ProjectIcon Icon={CSS3Icon} />
            <ProjectIcon Icon={HTML5Icon} />
            <ProjectIcon Icon={JSIcon} />
            <ProjectIcon Icon={PGIcon} />
            <ProjectIcon Icon={RailsIcon} />
            <ProjectIcon Icon={ReactIcon} />
            <ProjectIcon Icon={ReduxIcon} />
            <ProjectIcon Icon={RubyIcon} />
            {/* <HTML5Icon className="project-tech-icon" />
            <JSIcon className="project-tech-icon" />
            <PGIcon className="project-tech-icon" />
            <RailsIcon className="project-tech-icon" />
            <ReactIcon className="project-tech-icon" />
            <ReduxIcon className="project-tech-icon" />
            <RubyIcon className="project-tech-icon" /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
