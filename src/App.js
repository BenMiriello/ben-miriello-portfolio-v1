import React, { useState } from "react";
import Headline from "./components/Headline";
import Section from "./components/Section";
import Skill from "./components/Skill";
import ProjectCard from "./components/ProjectCard";
import content from "./content";

function App() {
  const [selectedSkills, setSelectedSkills] = useState([]);

  const handleClickSkill = (clicked) => {
    if (selectedSkills.includes(clicked)) {
      const idx = selectedSkills.indexOf((skill) => skill === clicked);
      let temp = selectedSkills;
      temp.splice(idx, 1);
      setSelectedSkills(temp);
    } else {
      const temp = selectedSkills;
      temp.push(clicked);
      setSelectedSkills(temp);
    }
  };

  return (
    <>
      <Headline />
      <Section title="About Me" narrow>
        <p>{content.aboutMe}</p>
      </Section>
      <Section title="Skills" skills>
        {content.skillset.map((name) => (
          <Skill key={name} name={name} onClick={handleClickSkill} />
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
