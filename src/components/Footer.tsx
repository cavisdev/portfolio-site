import { useStore } from "../store/useStore";
import { Copyright, FooterContainer, ModeSwitch, SocialLink } from "../styles/Footer.styles";

export default function Footer() {
    const darkMode = useStore((state) => state.darkMode)
    const setDarkMode = useStore((state) => state.setDarkMode)
    
    return (
        <FooterContainer>
            <Copyright>© 2023 cavis.dev</Copyright>
            <ModeSwitch onClick={() => setDarkMode()}>
                { darkMode ? <img src="./images/LightSwitch.svg" /> : <img src="./images/DarkSwitch.svg" />}
            </ModeSwitch>
            <SocialLink href="https://github.com/cavisdev" target="_blank">
                <img src={darkMode ? `./images/GitHub_White.svg` : `./images/GitHub.svg`} />
            </SocialLink>
            <SocialLink href="https://www.linkedin.com/in/cameron-avis/" target="_blank">
                <img src={darkMode ? `./images/LinkedIn_White.svg` : `./images/LinkedIn.svg`} />
            </SocialLink>
        </FooterContainer>
    )
}