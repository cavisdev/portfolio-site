import {
  AboutContainer,
  AboutText,
  AboutColumn,
  ExperienceColumn,
  DecorativeBox,
  Headshot,
  List,
  Skill,
  SkillsListContainer,
  Title,
  GradientLine,
  School,
  SchoolInformation,
} from "../styles/About.styles";

export default function About() {
  return (
    <AboutContainer>
      <AboutColumn>
        <Headshot>
          <img src="./images/Profile.jpg" />
          <DecorativeBox
            props={{
              solidColor: "secondary",
              opacity: "0.2",
              width: "90%",
              height: "85%",
              top: "-16px",
              left: "-24px",
            }}
          />
          <DecorativeBox
            props={{
              gradient:
                "linear-gradient(180deg, #6bb852 0%, rgba(0, 0, 0, 0) 100%);",
              width: "70%",
              height: "33%",
              top: "85%",
              left: "-24px",
            }}
          />
        </Headshot>
        <AboutText>
          Hey there! I’m Cameron, and I’m a Front-End React developer. I have a
          background in both Computer Science and Graphic Design, but spend most
          of my focus on web design and development. <br />
          <br />
          I’m really excited to expand my knowledge of UI/UX and animations to
          make exciting, dynamic websites.
          <br />
          <br />
          In my spare time, I’m an avid hiker, traveler, and enormous nerd for
          pop culture and alternative music.
        </AboutText>
      </AboutColumn>
      <GradientLine />
      <ExperienceColumn>
        <Title>Education</Title>
        <School>Scrimba</School>
        <SchoolInformation>
          Front-end Development - React JS
          <br />
          June 2022 - October 2022
        </SchoolInformation>
        <School>Pikes Peak Community College</School>
        <SchoolInformation>
          AAS - Graphic Design
          <br />
          January 2015 - May 2018
        </SchoolInformation>
        <School>Colorado State University</School>
        <SchoolInformation>
          BS - Computer Science
          <br />
          (Two Years Completed)
          <br />
          August 2011 - May 2013
        </SchoolInformation>
        <Title>Skills</Title>
        <SkillsListContainer>
          <List>
            <Skill>React JS</Skill>
            <Skill>Javascript</Skill>
            <Skill>Typescript</Skill>
            <Skill>HTML5</Skill>
            <Skill>CSS</Skill>
          </List>
          <List>
            <Skill>RESTful API</Skill>
            <Skill>Styled-Components</Skill>
            <Skill>Zustand</Skill>
            <Skill>Web Workers</Skill>
            <Skill>Adobe Creative Suite</Skill>
          </List>
          <DecorativeBox
            props={{
              solidColor: "secondary",
              opacity: "0.2",
              width: "40%",
              height: "85%",
              top: "-16px",
              right: "-24px",
            }}
          />
          <DecorativeBox
            props={{
              gradient:
                "linear-gradient(180deg, #6bb852 0%, rgba(0, 0, 0, 0) 100%);",
              width: "30%",
              height: "55%",
              top: "35%",
              right: "36px",
            }}
          />
        </SkillsListContainer>
      </ExperienceColumn>
    </AboutContainer>
  );
}
