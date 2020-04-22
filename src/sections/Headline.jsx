import React from "react";

import "../stylesheets/Headline.css";

const Headline = (props) => {
  return (
    <div
      className="Headline"
    >
      <div>
        <img
          src={process.env.PUBLIC_URL + "./images/headshot.png"}
          alt="Headshot"
          style={{
            width: "250px",
            minWidth: "250px",
          }}
        />
      </div>
      <div
        style={{
          minWidth: "250px",
          margin: "auto",
          textAlign: "center",
        }}
      >
        <h1 style={{minWidth: "250px"}} >
          Software Engineer & Web Developer
        </h1>
        <p>
          Tagline goes here. Inspire me a little. Not too much.
        </p>
      </div>
    </div>
  );
};

export default Headline;
