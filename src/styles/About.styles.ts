import styled from "styled-components";

interface Props {
  props: BoxStyles;
}

interface BoxStyles {
  solidColor?: string;
  gradient?: string;
  opacity?: string;
  width: string;
  height: string;
  top?: string;
  left?: string;
  bottom?: string;
  right?: string;
}

const AboutContainer = styled.div`
  ${({ theme }) => theme.mainDisplay};
  justify-content: space-between;
  min-height: 524px;
  padding: 1rem 2rem;

  @media only screen and (min-width: 680px) and (orientation: landscape) {
    min-height: 720px;
    flex-direction: row;
  }

  @media only screen and (min-width: 680px) and (orientation: portrait) {
    min-height: 720px;
    flex-direction: row;
  }
`;

const AboutColumn = styled.div`
  display: flex;
  align-self: flex-start;
  width: 100%;

  @media only screen and (min-width: 680px) {
    flex-direction: column;
    max-width: calc(50% - 24px);
    gap: 1rem;
  }

  @media only screen and (min-width: 1080px) {
    flex-direction: row;
    padding-top: 2rem;
    padding-left: 2rem;
  }
`;

const SkillsColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media only screen and (min-width: 680px) {
    align-self: flex-end;
    max-width: calc(50% - 24px);
  }
`;

const Headshot = styled.div`
  position: relative;
  width: 30%;
  align-self: flex-start;
  & img {
    width: 100%;
    border-radius: 8px;
  }

  @media only screen and (min-width: 680px) {
    width: 100%;
  }

  @media only screen and (min-width: 920px) {
    width: 60%;
  }

  @media only screen and (min-width: 1080px) {
    width: 80%;
  }
`;

const DecorativeBox = styled.div<Props>`
  position: absolute;
  border-radius: 8px;
  z-index: -25;
  background-color: ${({ props, theme }) =>
    props.solidColor ? theme.colors[props.solidColor] : ""};
  background: ${({ props }) => props.gradient};
  opacity: ${({ props }) => props.opacity};
  width: ${({ props }) => props.width};
  height: ${({ props }) => props.height};
  top: ${({ props }) => props.top};
  left: ${({ props }) => props.left};
  bottom: ${({ props }) => props.bottom};
  right: ${({ props }) => props.right};
`;

const AboutText = styled.p`
  margin: 0;
  margin-left: auto;
  font-weight: 300;
  width: 65%;

  @media only screen and (min-width: 460px) {
    line-height: 1.25rem;
  }

  @media only screen and (min-width: 680px) {
    margin-left: 0;
    width: 100%;
    line-height: 1rem;
  }

  @media only screen and (min-width: 920px) {
    font-size: 1.25rem;
    line-height: 1.125rem;
  }

  @media only screen and (min-width: 1080px) {
    line-height: 1.5rem;
  }
`;

const Title = styled.h6`
  margin: 0;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.colors.green};
  text-transform: uppercase;
  font-size: 1.5rem;
`;

const SkillsListContainer = styled.div`
  position: relative;
  display: flex;
  gap: 1rem;

  @media only screen and (min-width: 680px) {
    flex-direction: column;
    gap: 0;
  }
`;

const List = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Skill = styled.p`
  margin: 0;
  font-weight: 300;

  @media only screen and (min-width: 680px) {
    margin-top: 0.5rem;
    font-size: 1.125rem;
  }
`;

const GradientLine = styled.div`
  @media only screen and (min-width: 680px) {
    ${({ theme }) => theme.gradientLine};
    height: 75%;
    align-self: flex-end;
  }
`;

export {
  AboutContainer,
  AboutColumn,
  SkillsColumn,
  Headshot,
  DecorativeBox,
  AboutText,
  Title,
  SkillsListContainer,
  List,
  Skill,
  GradientLine,
};
