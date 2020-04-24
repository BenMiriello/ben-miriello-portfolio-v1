import React from "react";
import Separator from './Separator'

const Section = (props) => {

  const innerContent = () => {
    if (!!props.narrow) {
      return <div className="narrow">{props.children}</div>
    } else {
      return props.children
    }
  }

  return (
    <>
      <Separator px="20"/>
      <div className="main-section">
        <h2>{props.title}</h2>
        {innerContent()}
      </div>
      <Separator px="20"/>
    </>
  );
};

export default Section;