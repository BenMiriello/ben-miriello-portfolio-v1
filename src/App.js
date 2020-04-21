import React from 'react';
import './App.css';
import Headline from './pages/Headline'
import AboutMe from './pages/AboutMe'

function App() {
  return (
    <>
      <div style={{height: '40px', width: '40px'}}></div>
      <Headline />
      <div style={{height: '20px', width: '20px'}}></div>
      <AboutMe />
    </>
  );
}

export default App;
