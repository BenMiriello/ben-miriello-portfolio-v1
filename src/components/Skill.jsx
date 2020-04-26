import React, { useState } from "react";
import TechIcon from "./TechIcon";

const Skill = ({ name, onClick, selectedSkills }) => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
    onClick(name);
  };

  let showIcon = () => {
    if (selectedSkills.includes(name)) {
      return <TechIcon iconName={name} className={"skill-icon"} selected />;
    } else {
      return <TechIcon iconName={name} className={"skill-icon"} />;
    }
  }

  return (
    <li
      className={!clicked ? "skill" : "skill-clicked"}
      onClick={() => handleClick()}
    >
      <div className="skill-name-container">
        <span>
          {/* <TechIcon iconName={name} className={"skill-icon"} /> */}
          {showIcon()}
          {name}
        </span>
      </div>
    </li>
  );
};

export default Skill;
