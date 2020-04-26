import React, { useState } from "react";
import Icon from "./Icon";

const Skill = ({ name, onClick, selectedSkills }) => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
    onClick(name);
  };

  let showIcon = () => {
    if (selectedSkills.includes(name)) {
      return <Icon iconName={name} className={"skill-icon"} selected />;
    } else {
      return <Icon iconName={name} className={"skill-icon"} />;
    }
  }

  return (
    <li
      className={!clicked ? "skill" : "skill-clicked"}
      onClick={() => handleClick()}
    >
      <div className="skill-name-container">
        <span>
          {showIcon()}
          {name}
        </span>
      </div>
    </li>
  );
};

export default Skill;
