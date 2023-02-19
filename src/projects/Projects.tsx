import { useStore } from "../store/useStore";
import {
  ProjectLink,
  ProjectsContainer,
  DisplayContainer,
  DisplayImage,
  Description,
  ProjectTitle,
  ProjectNav,
  SectionTitle,
  LinkContainer,
  Content,
  ProjectLinkImage,
  Disclaimer,
} from "../styles/Projects.styles";
import { Skill, SkillsListContainer } from "../styles/Toolbox.styles";
import { data } from "./data";

export default function Projects() {
  const activeProject = useStore((state) => state.activeProject);
  const setActiveProject = useStore((state) => state.setActiveProject);
  const projectLinks = data.projects.map((item) => (
    <ProjectLink
      key={item.name}
      className={activeProject.name === item.name ? "active" : ""}
      onClick={() => setActiveProject(item)}
    ><ProjectLinkImage url={item.image} className={activeProject.name === item.name ? "active" : ""} aria-label={item.name}/></ProjectLink>
  ));

  return (
    <ProjectsContainer id="projects">
      <SectionTitle>Projects</SectionTitle>
      <Content>
        <ProjectNav>{projectLinks}</ProjectNav>
        <DisplayContainer>
          <DisplayImage src={activeProject.image} alt={`Homepage for ${activeProject.name}`} />
          <ProjectTitle>{activeProject.name}</ProjectTitle>
          <Description>{activeProject.description}</Description>
          <LinkContainer>
            <a href={activeProject.link} target="_blank">
              View Project
            </a>
            <a href={activeProject.github} target="_blank">
              View Code
            </a>
          </LinkContainer>
          <Disclaimer>{`(links open in new tab)`}</Disclaimer>
          <SkillsListContainer>
            {activeProject.skills.map((skill) => (
              <Skill key={skill}>{skill}</Skill>
            ))}
          </SkillsListContainer>
        </DisplayContainer>
      </Content>
    </ProjectsContainer>
  );
}
