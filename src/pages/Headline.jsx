import React from "react";

const Headline = (props) => {
  return (
    <div
      style={{
        width: '85%',
        margin: 'auto',
        height: '250px',
        display: 'flex',
        justifyContent: 'space-between',
        maxWidth: '850px'
      }}
    >
      <div
        style={{
          float: 'left',
        }}
      >
        <img
          src={process.env.PUBLIC_URL + "./images/headshot.png"}
          alt="Headshot"
          style={{
            width: "210px",
            // height: "250px",
          }}
        />
      </div>
      <div
        style={{
          margin: 'auto',
          textAlign: 'center',
          // padding: '40px'
        }}
      >
        <h1>Software Engineer & Web Developer</h1>
        <p>Tagline goes here. Inspire me a little. Not too much.</p>
      </div>
    </div>
  );
};

export default Headline;
