import React from "react";

const Section = ({title, narrow, skills, children}) => {

  const innerContent = () => {
    if (!!narrow) {
      return <div className="narrow">{children}</div>
    } else {
      return children
    }
  }

  const getClass = () => {
    if (skills) return "main-section skills"
    else return "main-section"
  }

  return (
    <div className={getClass()}>
      <h2>{title}</h2>
      {innerContent()}
    </div>
  );
};

export default Section;