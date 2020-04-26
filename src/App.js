import React, { useState } from "react";
import Headline from "./components/Headline";
import Section from "./components/Section";
import Skill from "./components/Skill";
import ProjectCard from "./components/ProjectCard";
import content from "./content";

const App = () => {
  const [selectedSkills, setSelectedSkills] = useState([]);

  const handleClickSkill = (clicked) => {
    if (selectedSkills.includes(clicked)) {
      const idx = selectedSkills.indexOf(clicked);
      if (idx >= 0) {
        let temp = [...selectedSkills];
        temp.splice(idx, 1);
        setSelectedSkills(temp);
      }
    } else {
      setSelectedSkills([...selectedSkills, clicked]);
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
          <Skill
            key={name}
            name={name}
            onClick={handleClickSkill}
            selectedSkills={selectedSkills}
          />
        ))}
      </Section>
      <Section title="Projects" narrow>
        {content.projects.map((proj) => (
          <ProjectCard project={proj} selectedSkills={selectedSkills} />
        ))}
      </Section>
    </>
  );
};

export default App;
