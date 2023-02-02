import { useStore } from "../../store/useStore";
import { ContactButton, ContactContainer, SocialLink, Socials, Text} from "../../styles/Contact.styles";

export default function Contact() {
    const darkMode = useStore((state) => state.darkMode)

  return (
      <ContactContainer>
          <Text>I'm <span className="green">Excited</span><br /> to Hear from <span className="green">You!</span></Text>
          <Socials>
          <SocialLink href="https://github.com/cavisdev" target="_blank">
                <img src={darkMode ? `./images/GitHub_White.svg` : `./images/GitHub.svg`} />
              </SocialLink>
              <SocialLink href="https://www.linkedin.com/in/cameron-avis/" target="_blank">
                <img src={darkMode ? `./images/LinkedIn_White.svg` : `./images/LinkedIn.svg`} />
            </SocialLink>
          </Socials>
      <ContactButton href="mailto:camsavis@gmail.com">Email Me!</ContactButton>
    </ContactContainer>
  );
}
