import React from "react";

const AboutMe = (props) => {
  return (
    <div
      style={{
        margin: "auto",
        width: "85%",
        maxWidth: '850px'
      }}
    >
      <h1 style={{ margin: "auto", textAlign: "center" }}>About Me</h1>
      <div style={{ position: "relative", margin: 'auto', width: '85%' }}>
        <p style={{textAlign: "left"}}>
          This is the part that's about me. What does someone need to know
          'about me' if it's got to fit in one paragraph? All that goes right
          here. Everything else to the back of the line. Gotta wait for later.
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
