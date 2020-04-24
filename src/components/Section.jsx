import React from "react";
import Separator from './Separator'

const Section = (props) => {
  return (
    <>
      <Separator px="20"/>
      <div className="main-section">
        <h2>{props.title}</h2>
        <div className="narrow">{props.children}</div>
      </div>
    </>
  );
};

export default Section;
