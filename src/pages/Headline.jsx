import React from "react";

const Headline = (props) => {
  return (
    <div
      style={{
        height: '250px',
        width: '90%',
        margin: 'auto',
      }}
    >
      <div
        style={{
          margin: "20px",
          float: 'left',
        }}
      >
        <img
          src={process.env.PUBLIC_URL + "./images/headshot.png"}
          alt="Headshot"
          style={{
            width: "250px",
            height: "250px",
          }}
        />
      </div>
      <div
        style={{
          margin: 'auto',
          textAlign: 'center',
          padding: '70px'
        }}
      >
        <h1>Software Engineer & Web Developer</h1>
        <p>Tagline goes here. Something mildly inspiring.</p>
      </div>
    </div>
  );
};

export default Headline;
