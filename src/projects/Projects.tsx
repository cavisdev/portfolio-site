import { useStore } from "../store/useStore";
import {
  ProjectLink,
  ProjectsContainer,
  DisplayContainer,
  DisplayImage,
  Description,
  ProjectTitle,
} from "../styles/Projects.styles";
import { Skill, SkillsListContainer } from "../styles/Toolbox.styles";
import { data } from "./data";

export default function Projects() {
  const projectTabOpen = useStore((state) => state.projectTabOpen);
  const setProjectTabOpen = useStore((state) => state.setProjectTabOpen);
  const activeProject = useStore((state) => state.activeProject);
  const setActiveProject = useStore((state) => state.setActiveProject);
  const projectLinks = data.projects.map((item) => (
    <ProjectLink
      key={item.name}
      onClick={() => setActiveProject(item)}
      className={activeProject.name === item.name ? "active" : ""}
    >
      {item.name}
    </ProjectLink>
  ));

  return (
    <ProjectsContainer>
          <DisplayContainer>
              <a href={activeProject.link} target="_blank">
              <DisplayImage src={activeProject.image} />
        </a>
        <ProjectTitle>{ activeProject.name}</ProjectTitle>
          <Description>{activeProject.description}</Description>
          <SkillsListContainer>
            {activeProject.skills.map((skill) => (
              <Skill key={skill}>{skill}</Skill>
            ))}
          </SkillsListContainer>
      </DisplayContainer>
    </ProjectsContainer>
  );
}
