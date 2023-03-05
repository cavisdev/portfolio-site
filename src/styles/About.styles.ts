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

const AboutContainer = styled.section`
  padding: 2em;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  letter-spacing: 0.25px;
  max-width: 1200px;
  margin: 0 auto;
  gap: 1.5em;

  @media only screen and (min-width: 1024px) {
    flex-direction: row;
    align-items: flex-start;
    gap: 4em;
  }

  @media only screen and (min-width: 1280px) {
    padding: 8em;
  }
`;

const Headshot = styled.img`
  width: 100%;
  max-width: 50%;
  border-radius: 8px;
  margin-bottom: 2em;
`;

const InfoColumn = styled.article`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 1em;


`;

const Welcome = styled.h1`
  margin: 0;
  font-size: 12vw;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.green};
  
  @media only screen and (min-width: 1024px) {
    font-size: 8vw;
  }

  @media only screen and (min-width: 1280px) {
    font-size: 6vw;
  }
`

const AboutText = styled.p`
  margin: 0;
  font-size: 1rem;
  font-weight: 300;
  line-height: 1.25em;
  white-space: pre-line;

  @media only screen and (min-width: 1280px) {
    font-size: 1.25rem;
  }
`;

const Title = styled.h2`
  color: ${({ theme }) => theme.colors.green};
  text-transform: uppercase;
  font-size: 6vw;

  @media only screen and (min-width: 1024px) {
    font-size: 3vw;
  }

  @media only screen and (min-width: 1024px) {
    font-size: 2vw;
  }
`;

const SchoolList = styled.ol`
  display: flex;
  flex-wrap: wrap;
  gap: 1em;
  list-style-type: none;
  margin: 0;
  padding: 0;
`
const SchoolBlock = styled.li`
  border-left: 0.5vw solid ${({ theme }) => theme.colors.gray};
  padding: 0.25em 1em;
`

const SchoolName = styled.h3`
margin: 0.5em auto;
`;

const SchoolInformation = styled.p`
  line-height: 1.25em;
  font-weight: 300;
`;

export {
  AboutContainer,
  Headshot,
  Welcome,
  InfoColumn,
  AboutText,
  Title,
  SchoolList,
  SchoolBlock,
  SchoolName,
  SchoolInformation,
};
