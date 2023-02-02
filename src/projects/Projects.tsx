import { useStore } from "../store/useStore";
import {
  MobileNavContainer,
  Backdrop,
  ProjectLink,
  ProjectsContainer,
  DesktopNavContainer,
  MobileView,
  DisplayContainer,
  DisplayImage,
  Description,
  Skills,
  InfoContainer,
} from "../styles/Projects.styles";
import ArrowIcon from "../components/Navigation/ArrowIcon";
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
      <MobileView>
        <ArrowIcon handleClick={() => setProjectTabOpen()} />
        <Backdrop
          visible={projectTabOpen ? true : false}
          onClick={() => setProjectTabOpen()}
        />
        <MobileNavContainer visible={projectTabOpen}>
          {projectLinks}
        </MobileNavContainer>
      </MobileView>
      <DesktopNavContainer>{projectLinks}</DesktopNavContainer>
          <DisplayContainer>
              <a href={activeProject.link} target="_blank">
              <DisplayImage src={activeProject.image} />
              </a>
        <InfoContainer>
          <Description>{activeProject.description}</Description>
          <Skills>
            {activeProject.skills.map((skill) => (
              <p key={skill}>{skill}</p>
            ))}
          </Skills>
        </InfoContainer>
      </DisplayContainer>
    </ProjectsContainer>
  );
}
