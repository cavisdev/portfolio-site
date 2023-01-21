import styled from "styled-components";

interface Props {
    visible: boolean;
  }

const ProjectsContainer = styled.div`
  ${({ theme }) => theme.mainDisplay};
  flex-direction: row;
  gap: 2rem;
  padding: 2rem 0;
`;

const MobileView = styled.div`
@media only screen and (min-width: 680px) {
  display: none;
}
`

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
  ${({ theme }) => theme.colors.primary} 100%
);
box-shadow: -8px 0px 16px ${({ theme }) => theme.colors.secondary};

@media only screen and (min-width: 680px) {
  display: none;
}
`
const DesktopNavContainer = styled.div`
display: none;

@media only screen and (min-width: 680px) {
  display: flex;
  flex-direction: column;
  margin-bottom: auto;
  gap: 1rem;
}
`

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

    @media only screen and (min-width: 680px){
        font-size: 2rem;
    }

    @media only screen and (min-width: 920px){
        font-size: 3rem;
    }
`

const DisplayContainer = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
    margin-bottom: auto;
    gap: 1rem;
`

const DisplayImage = styled.img`
max-width: 920px;
    width: 100%;
    border-radius: 4px;
    cursor: pointer;
`

const InfoContainer = styled.div`
    display: flex;
    gap: 1rem;
    max-width: 920px;
`

const Description = styled.p`
    margin: 0;
    flex: 3;

    @media only screen and (min-width: 920px) and (min-height: 800px) {
        font-size: 1.25rem;
        line-height: 1.5rem;
    }
`

const Skills = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    gap: 0.5rem;
    font-size: 0.75rem;
    border-left: 1px solid ${({ theme }) => theme.colors.secondary};
    padding-left: 0.5rem;

    & * {
        margin: 0;
    }
`

export { ProjectsContainer, MobileView, MobileNavContainer, DesktopNavContainer, Backdrop, ProjectLink, DisplayContainer, DisplayImage, InfoContainer, Description, Skills };
