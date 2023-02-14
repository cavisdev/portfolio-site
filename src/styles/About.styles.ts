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
  padding: 4em;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  letter-spacing: 0.25px;

  @media only screen and (min-width: 1024px) {
    flex-direction: row;
    align-items: flex-start;
    gap: 2em;
  }

  @media only screen and (min-width: 1280px) {
    padding: 8em;
  }
`;

const Headshot = styled.img`
  width: 100%;
  max-width: 50vw;
  border-radius: 8px;
  margin-bottom: 2em;
`;

const InfoColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 1em;


`;

const Welcome = styled.p`
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

const Title = styled.h6`
  margin: 0;
  margin-top: 2em;
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

const SchoolList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1em;
`
const SchoolBlock = styled.div`
  border-left: 0.5vw solid ${({ theme }) => theme.colors.gray};
  padding: 0.25em 1em;
`

const SchoolName = styled.h6`
  margin: 0;
  margin-bottom: 0.5em;
  font-size: 1rem;
`;

const SchoolInformation = styled.p`
  margin: 0;
  line-height: 1.25em;
  font-size: 1rem;
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
