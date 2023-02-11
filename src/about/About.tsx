import { aboutData } from "./About.data";
import {
  AboutContainer,
  AboutText,
  InfoColumn,
  Headshot,
  Title,
  SchoolName,
  SchoolInformation,
  Welcome,
  SchoolList,
  SchoolBlock,
} from "../styles/About.styles";
import { Skill, SkillsListContainer } from "../styles/Toolbox.styles";

export default function About() {
  const schools = aboutData.education.map((item) => (
    <SchoolBlock key={item.school}>
      <SchoolName>{item.school}</SchoolName>
      <SchoolInformation>
        {item.major}
        <br />
        {item.date}
      </SchoolInformation>
    </SchoolBlock>
  ));

  const skills = aboutData.skills.map((item) => (
    <Skill key={item}>{item}</Skill>
  ));

  return (
    <AboutContainer id="about">
      <Headshot src="./images/Profile.webp" />
      <InfoColumn>
        <Welcome>Hello!</Welcome>
        <AboutText>{aboutData.intro}</AboutText>
        <Title>Education</Title>
        <SchoolList>{schools}</SchoolList>
        <Title>Skills</Title>
        <SkillsListContainer>{skills}</SkillsListContainer>
      </InfoColumn>
    </AboutContainer>
  );
}
