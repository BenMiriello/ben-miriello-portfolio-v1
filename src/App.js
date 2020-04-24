import React from 'react';
import Headline from './components/Headline'
import Section from './components/Section'
import Skill from './components/Skill'
import ProjectCard from './components/ProjectCard'
import content from "./content";

function App() {
  return (
    <>
      <Headline />
      <Section title="About Me">
        <p>{content.aboutMe}</p>
      </Section>
      <Section title="Skills">
        {content.skillset.map(name => (
          <Skill key={name} name={name} />
        ))}
      </Section>
      <Section title="Projects">
        {content.projects.map((proj) => (
          <ProjectCard proj={proj} />
        ))}
      </Section>
    </>
  );
}

export default App;

