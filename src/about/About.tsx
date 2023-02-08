import { aboutData } from "./About.data";
import {
  AboutContainer,
  AboutText,
  InfoColumn,
  Headshot,
  Title,
  School,
  SchoolInformation,
  Welcome,
  SchoolList,
} from "../styles/About.styles";
import { Skill, SkillsListContainer } from "../styles/Toolbox.styles";

export default function About() {
  const schools = aboutData.education.map((item) => (
    <div key={item.school}>
      <School>{item.school}</School>
      <SchoolInformation>
        {item.major}
        <br />
        {item.date}
      </SchoolInformation>
    </div>
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
