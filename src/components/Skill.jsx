import React, { useState } from "react";
import TechIcon from './TechIcon';

const Skill = ({name, onClick}) => {

  const [clicked, setClicked] = useState(false)

  const handleClick = () => {
    setClicked(!clicked);
    onClick(name)
  }
  
  return (
    <li
      className={!clicked ? "skill" : "skill-clicked"}
      onClick={() => handleClick()}
    >
      <div className="skill-name-container">
        <span><TechIcon iconName={name} className={'skill-icon'}/>{name}</span>
      </div>
    </li>
  );
};

export default Skill;

