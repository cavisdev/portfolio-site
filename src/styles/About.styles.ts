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
`;

const Headshot = styled.img`
  width: 100%;
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
  color: ${({theme}) => theme.colors.green};
`

const AboutText = styled.p`
  margin: 0;
  font-size: 4vw;
  font-weight: 300;
  line-height: 1.25em;
  white-space: pre-line;
`;

const Title = styled.h6`
  margin: 0;
  margin-top: 2em;
  color: ${({ theme }) => theme.colors.green};
  text-transform: uppercase;
  font-size: 6vw;
`;

const SchoolList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1em;
`

const School = styled.h6`
  margin: 0;
  margin-bottom: 0.5em;
  font-size: 4vw;
`;

const SchoolInformation = styled.p`
  margin: 0;
  line-height: 1.25em;
  font-size: 4vw;
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
  School,
  SchoolInformation,
};
