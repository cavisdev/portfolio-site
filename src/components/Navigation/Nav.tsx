import { useStore } from "../../store/useStore";
import { Link } from "react-scroll";
import {
  Backdrop,
  DesktopMenuContainer,
  Logo,
  MobileLink,
  MobileMenuContainer,
  NavContainer,
} from "../../styles/Nav.styles";
import HamburgerIcon from "./HamburgerIcon";

export default function Nav() {
  const mobileMenuOpen = useStore((state) => state.mobileMenuOpen);
  const setMobileMenuOpen = useStore((state) => state.setMobileMenuOpen);

  return (
    <NavContainer>
      <Logo src={"./images/logo_light.svg"} alt="Logo for Cameron Avis, depicting a green C with a negative-space A in the center."/>
      <HamburgerIcon />
      <MobileMenuContainer className={mobileMenuOpen ? "active" : ""}>
        <Link to="home" spy={true} smooth={true} duration={500}>
          <MobileLink>home</MobileLink>
        </Link>
        <Link to="about" spy={true} smooth={true} offset={-64} duration={500}>
          <MobileLink>about</MobileLink>
        </Link>
        <Link
          to="projects"
          spy={true}
          smooth={true}
          offset={-64}
          duration={500}
        >
          <MobileLink>projects</MobileLink>
        </Link>
        <Link to="contact" spy={true} smooth={true} offset={-64} duration={500}>
          <MobileLink>contact</MobileLink>
        </Link>
      </MobileMenuContainer>
      {mobileMenuOpen && <Backdrop onClick={() => setMobileMenuOpen()} />}
      <DesktopMenuContainer>
        <Link to="home" spy={true} smooth={true} duration={500}>
          <a>home</a>
        </Link>
        <Link to="about" spy={true} smooth={true} offset={-52} duration={500}>
        <a>about</a>
        </Link>
        <Link
          to="projects"
          spy={true}
          smooth={true}
          offset={-52}
          duration={500}
        >
          <a>projects</a>
        </Link>
        <Link to="contact" spy={true} smooth={true} offset={-52} duration={500}>
          <a>contact</a>
        </Link>
      </DesktopMenuContainer>
    </NavContainer>
  );
}
