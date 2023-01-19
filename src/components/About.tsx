import {
  AboutContainer,
  AboutText,
  AboutColumn,
  SkillsColumn,
  DecorativeBox,
  Headshot,
  List,
  Skill,
  SkillsListContainer,
  Title,
  GradientLine,
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
      <SkillsColumn>
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
      </SkillsColumn>
    </AboutContainer>
  );
}
