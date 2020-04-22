import React from "react";

const Skill = props => {

  const handleClick = () => {}
  
  return (
    <li
      onClick={handleClick}
      style={{
        display: 'inline-block',
        margin: '10px',
        borderStyle: 'solid',
        borderWidth: '3px',
        borderColor: 'grey',
        backgroundColor: 'white'
      }}
    >
      <div style={{margin: '8px', marginTop: '2px', marginBottom: '2px'}}>
        <span>{props.name}</span>
      </div>
    </li>
  );
};

export default Skill;

