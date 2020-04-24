import React from "react";

const Skill = props => {

  const handleClick = () => {}
  
  return (
    <li
      className="skill"
      onClick={handleClick}
    >
      <div style={{margin: '8px', marginTop: '2px', marginBottom: '2px'}}>
        <span>{props.name}</span>
      </div>
    </li>
  );
};

export default Skill;

