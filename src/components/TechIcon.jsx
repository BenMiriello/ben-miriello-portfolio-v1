import React from "react";
import { ReactComponent as ColorJSIcon } from "../vendors/devicons/javascript/javascript-original.svg";
import { ReactComponent as ColorReactIcon } from "../vendors/devicons/react/react-original.svg";
import { ReactComponent as ColorReduxIcon } from "../vendors/devicons/redux/redux-original.svg";
import { ReactComponent as ColorRubyIcon } from "../vendors/devicons/ruby/ruby-original.svg";
import { ReactComponent as ColorRailsIcon } from "../vendors/devicons/rails/rails-plain.svg";
import { ReactComponent as ColorPGIcon } from "../vendors/devicons/postgresql/postgresql-original.svg";
import { ReactComponent as ColorCSS3Icon } from "../vendors/devicons/css3/css3-original.svg";
import { ReactComponent as ColorHTML5Icon } from "../vendors/devicons/html5/html5-original.svg";

import { ReactComponent as BWJSIcon } from "../vendors/devicons/javascript/bw-javascript-original.svg";
import { ReactComponent as BWReactIcon } from "../vendors/devicons/react/bw-react-original.svg";
import { ReactComponent as BWReduxIcon } from "../vendors/devicons/redux/bw-redux-original.svg";
import { ReactComponent as BWRubyIcon } from "../vendors/devicons/ruby/bw-ruby.svg";
import { ReactComponent as BWRailsIcon } from "../vendors/devicons/rails/bw-rails.svg";
import { ReactComponent as BWPGIcon } from "../vendors/devicons/postgresql/bw-postgresql-original.svg";
import { ReactComponent as BWCSS3Icon } from "../vendors/devicons/css3/bw-css3-original.svg";
import { ReactComponent as BWHTML5Icon } from "../vendors/devicons/html5/bw-html5-original.svg";

const TechIcon = ({ iconName, className, selected, inProject }) => {
  let Icon = null;

  if (!!selected) {
    switch(iconName){
      case 'Javascript': Icon = ColorJSIcon; break;
      case 'React': Icon = ColorReactIcon; break;
      case 'Redux': Icon = ColorReduxIcon; break;
      case 'Ruby': Icon = ColorRubyIcon; break;
      case 'Rails': Icon = ColorRailsIcon; break;
      case 'PostgreSQL': Icon = ColorPGIcon; break;
      case 'CSS3': Icon = ColorCSS3Icon; break;
      case 'HTML5': Icon = ColorHTML5Icon; break;
    }
  } else {
    switch(iconName){
      case 'Javascript': Icon = BWJSIcon; break;
      case 'React': Icon = BWReactIcon; break;
      case 'Redux': Icon = BWReduxIcon; break;
      case 'Ruby': Icon = BWRubyIcon; break;
      case 'Rails': Icon = BWRailsIcon; break;
      case 'PostgreSQL': Icon = BWPGIcon; break;
      case 'CSS3': Icon = BWCSS3Icon; break;
      case 'HTML5': Icon = BWHTML5Icon; break;
    }
  }

  if (!Icon) return null

  if (className === 'skill-icon') {
    return <Icon className="skill-icon" />
  }

  let buttonClass = "project-icon-button"

  if (selected && inProject) {
    buttonClass ="project-icon-button selected-project-tech"
  }

  return (
    <div className={buttonClass}>
      <div className="project-icon-container">
        <Icon />
      </div>
    </div>
  )
};

export default TechIcon;