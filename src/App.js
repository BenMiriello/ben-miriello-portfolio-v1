import React from 'react';
import './stylesheets/App.css';
import Headline from './sections/Headline'
import AboutMe from './sections/AboutMe'
import Skills from './sections/Skills'
import skillset from './content/skillset'
import about from './content/about-me'

// import "./stylesheets/development.css"

function App() {
  return (
    <>
      <div style={{height: '40px', width: '100%'}}></div>
      <Headline />
      <div style={{height: '20px', width: '100%'}}></div>
      <AboutMe about={about} />
      <div style={{height: '20px', width: '100%'}}></div>
      <Skills skillset={skillset} />
    </>
  );
}

export default App;

