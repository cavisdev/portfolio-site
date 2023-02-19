import styled from "styled-components";

interface ProjectNavItemProps {
  url: string;
}

const ProjectsContainer = styled.section`
  padding: 2em;
  min-height: 100vh;
  width: 100%;
  letter-spacing: 0.25px;
  line-height: 1.25em;

  @media only screen and (min-width: 1280px) {
    padding: 8em;
  }
`;

const SectionTitle = styled.h1`
  display: inline-block;
  line-height: 4vw;
  color: ${({ theme }) => theme.colors.green};
  padding-left: 0.25em;
  font-size: 8vw;
  font-weight: 700;
  border-left: 1vw solid ${({ theme }) => theme.colors.gray};

  @media only screen and (min-width: 1024px) {
    font-size: 6vw;
  }

  @media only screen and (min-width: 1024px) {
    font-size: 4vw;
    margin-bottom: 1em;
  }
`;

const Content = styled.article`
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  margin: 0 auto;

  @media only screen and (min-width: 1024px) {
    flex-direction: row;
    gap: 2em;
  }
`;

const ProjectNav = styled.ul`
  overflow-x: scroll;
  overflow-y: hidden;
  display: flex;
  width: 100%;
  height: 160px;
  list-style-type: none;
  margin: 0;
  margin-bottom: 2em;
  padding: 0;

  @media only screen and (min-width: 768px) {
    height: 232px;
  }

  @media only screen and (min-width: 1024px) {
    flex-direction: column;
    overflow-x: auto;
    overflow-y: auto;
    height: 100%;
    margin-bottom: 0;
    width: 40%;
    align-items: center;
  }

  @media only screen and (min-width: 1280px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`;

const ProjectLink = styled.li`
  position: relative;
  width: 113px;
  height: 127px;
  background-color: ${({ theme }) => theme.colors.white};
  flex: 0 0 auto;
  clip-path: polygon(50% 10%, 90% 25%, 90% 75%, 50% 90%, 10% 75%, 10% 25%);
  cursor: pointer;
  transition: clip-path 0.5s;

  &.active {
    background-color: ${({ theme }) => theme.colors.green};
    clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
  }

  @media only screen and (min-width: 768px) {
    width: 168px;
    height: 189px;
  }

  @media only screen and (min-width: 1024px) {
    width: 200px;
    height: 224px;
  }
`;

const ProjectLinkImage = styled.button<ProjectNavItemProps>`
  position: absolute;
  width: 96%;
  height: 96%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: none;
  background: url(${(props) => props.url});
  background-color: rgb(80, 80, 80);
  background-blend-mode: overlay;
  background-size: cover;
  background-position: center;
  clip-path: polygon(50% 10%, 90% 25%, 90% 75%, 50% 90%, 10% 75%, 10% 25%);
  cursor: pointer;
  transition: clip-path 0.5s;

  &.active {
    clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
    background-blend-mode: normal;
  }

  &:hover,
  &:focus {
    background-blend-mode: normal;
  }
`;

const DisplayContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
  width: 100%;

  @media only screen and (min-width: 1280px) {
    width: 60%;
  }
`;

const DisplayImage = styled.img`
  width: 100%;
  border-radius: 4px;
`;

const ProjectTitle = styled.h2`
  margin: 0.5em 0;
  color: ${({ theme }) => theme.colors.green};
  border-left: 0.5vw solid ${({ theme }) => theme.colors.gray};
  padding-left: 0.25em;
  font-size: 6vw;
  font-weight: 700;

  @media only screen and (min-width: 1024px) {
    font-size: 4vw;
  }

  @media only screen and (min-width: 1280px) {
    font-size: 2vw;
  }
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

const Disclaimer = styled.p`
  margin: 0;
  font-weight: 300;
  color: ${({ theme }) => theme.colors.white};
  opacity: 0.65;
  letter-spacing: 1px;
`;

export {
  ProjectsContainer,
  SectionTitle,
  Content,
  ProjectNav,
  ProjectLink,
  ProjectLinkImage,
  DisplayContainer,
  DisplayImage,
  ProjectTitle,
  Description,
  LinkContainer,
  Disclaimer,
};
