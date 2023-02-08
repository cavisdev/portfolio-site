import styled from "styled-components";

interface Props {
  visible: boolean;
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

const MobileNavContainer = styled.div<Props>`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  position: fixed;
  top: 0;
  left: ${(props) => (props.visible ? "0px" : "-200px")};
  transition: left 0.5s ease-out;
  height: 100%;
  width: 180px;
  padding: 2rem 1rem 0 2rem;
  z-index: 100;
  background: linear-gradient(
    180deg,
    ${({ theme }) => theme.colors.gray} 0%,
    ${({ theme }) => theme.colors.black} 100%
  );
  box-shadow: -8px 0px 16px ${({ theme }) => theme.colors.white};
`;

const Backdrop = styled.div<Props>`
  height: 100%;
  width: 100%;
  z-index: 50;
  position: fixed;
  top: 0;
  left: 0;
  display: ${(props) => (props.visible ? "block" : "none")};
`;

const ProjectLink = styled.h3`
  margin: 0;
  font-size: 1.5rem;
  opacity: 0.5;
  cursor: pointer;
  &:hover {
    color: ${({ theme }) => theme.colors.green};
    opacity: 1;
  }

  &.active {
    opacity: 1;
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
  cursor: pointer;
`;

const ProjectTitle = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colors.green};
  font-size: 6vw;
  font-weight: 700;
`;

const Description = styled.p`
  margin: 0;
  font-size: 4vw;
  font-weight: 300;
`;

export {
  ProjectsContainer,
  MobileNavContainer,
  Backdrop,
  ProjectLink,
  DisplayContainer,
  DisplayImage,
  ProjectTitle,
  Description,
};
