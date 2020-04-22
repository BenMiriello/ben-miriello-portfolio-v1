import React from "react";
import Skill from './Skill'

const Skills = props => {

  return (
    <div
      style={{
        margin: "auto",
        width: "85%",
        maxWidth: "850px",
      }}
    >
      <h1
        style={{
          margin: "auto",
          textAlign: "center",
        }}
      >
        Skills
      </h1>
      <div style={{margin: 'auto'}}>
        <ul>
          {props.skillset.map(name => <Skill key={name} name={name}/>)}
        </ul>
      </div>
    </div>
  );
};

export default Skills;
