import { useStore } from "../../store/useStore";
import { Link } from "react-scroll";
import {
  Backdrop,
  DesktopLink,
  DesktopMenuContainer,
  Logo,
  MobileLink,
  MobileMenuContainer,
  NavContainer,
} from "../../styles/Nav.styles";
import HamburgerIcon from "./HamburgerIcon";
import { useEffect, useRef } from "react";

export default function Nav() {
  const mobileMenuOpen = useStore((state) => state.mobileMenuOpen);
  const setMobileMenuOpen = useStore((state) => state.setMobileMenuOpen);
  const navRef = useRef<HTMLDivElement>(null);

  return (
    <NavContainer ref={navRef}>
      <Logo src={"./images/logo_light.svg"} />
      <HamburgerIcon />
      <MobileMenuContainer className={mobileMenuOpen ? "active" : ""}>
        <Link to="home" spy={true} smooth={true} offset={-64} duration={500}>
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
        <Link to="home" spy={true} smooth={true} offset={-64} duration={500}>
          <DesktopLink>home</DesktopLink>
        </Link>
        <Link to="about" spy={true} smooth={true} offset={-64} duration={500}>
        <DesktopLink>about</DesktopLink>
        </Link>
        <Link
          to="projects"
          spy={true}
          smooth={true}
          offset={-64}
          duration={500}
        >
          <DesktopLink>projects</DesktopLink>
        </Link>
        <Link to="contact" spy={true} smooth={true} offset={-64} duration={500}>
          <DesktopLink>contact</DesktopLink>
        </Link>
      </DesktopMenuContainer>
    </NavContainer>
  );
}
