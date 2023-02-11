import styled from "styled-components";

interface ProjectNavItemProps {
  url: string;
}

const ProjectsContainer = styled.div`
  display: flex;
  padding: 4em;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
  letter-spacing: 0.25px;
  line-height: 1.25em;
`;

const SectionTitle = styled.div`
  color: ${({ theme }) => theme.colors.green};
  margin-bottom: 2em;
  font-size: 8vw;
  font-weight: 700;
`;

const ProjectNav = styled.div`
  overflow-x: scroll;
  overflow-y: hidden;
  display: flex;
  width: 100%;
  height: 25vw;
  gap: 0em 1.5em;
  margin-bottom: 2em;
`;

const ProjectLink = styled.div<ProjectNavItemProps>`
  width: 22vw;
  height: 25vw;
  flex: 0 0 auto;
  background: url(${(props) => props.url});
  background-size: cover;
  background-position: center;
  clip-path: polygon(50% 10%, 90% 25%, 90% 75%, 50% 90%, 10% 75%, 10% 25%);
  cursor: pointer;
  transition: clip-path 0.5s;

  &.active,
  &:hover,
  &:focus {
    clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
  }
`;

const DisplayContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
`;

const DisplayImage = styled.img`
  width: 100%;
  border-radius: 4px;
`;

const ProjectTitle = styled.p`
  margin: 0.5em 0;
  color: ${({ theme }) => theme.colors.green};
  border-left: 4px solid ${({ theme }) => theme.colors.gray};
  padding-left: 0.25em;
  font-size: 6vw;
  font-weight: 700;
`;

const Description = styled.p`
  margin: 0;
  margin-bottom: 1em;
  font-size: 1rem;
  line-height: 1.25rem;
  font-weight: 300;
`;

const LinkContainer = styled.div`
  display: flex;
  gap: 1em;
  margin-bottom: 1em;

  & a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.white};
    border: 2px solid ${({ theme }) => theme.colors.green};
    border-radius: 4px;
    padding: 0.5em;
  }

  & a:hover,
  & a:focus {
    color: ${({ theme }) => theme.colors.green};
  }
`;

export {
  ProjectsContainer,
  SectionTitle,
  ProjectNav,
  ProjectLink,
  DisplayContainer,
  DisplayImage,
  ProjectTitle,
  Description,
  LinkContainer,
};
