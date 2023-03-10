import {
  CenterHex,
  ContactContainer,
  Row,
  SatelliteHex,
  Text,
} from "../styles/Contact.styles";

export default function Contact() {
  return (
    <ContactContainer id="contact">
      <Row>
        <CenterHex>CONTACT</CenterHex>
        <a href="mailto:camsavis@gmail.com">
          <SatelliteHex shift={"translate(60%, 0)"} aria-label={"Email"}>
            <img src="./images/Email.svg" />
          </SatelliteHex>
        </a>
      </Row>
      <Row>
        <a href="https://github.com/cavisdev" target="_blank">
          <SatelliteHex aria-label={"GitHub"}>
            <img src="./images/GitHub_White.svg" />
          </SatelliteHex>
        </a>
        <a href="https://www.linkedin.com/in/cameron-avis/" target="_blank">
          <SatelliteHex aria-label={"LinkedIn"}>
            <img src="./images/LinkedIn_White.svg" />
          </SatelliteHex>
        </a>
      </Row>
      <Text>
        <span className="bigGreen">Thank you</span> for stopping by! I can't wait to hear from you! Feel free to reach out or follow me on my socials!
      </Text>
    </ContactContainer>
  );
}
