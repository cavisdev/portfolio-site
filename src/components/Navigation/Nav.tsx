import { useStore } from "../../store/useStore";
import { Link } from "react-scroll";
import {
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
  const ref = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkIfClickedOutside = (e: any) => {
      if (mobileMenuOpen && ref.current && !ref.current.contains(e.target)) {
        setMobileMenuOpen();
      }
    };

    const checkScroll = () => {
      if (
        mobileMenuOpen &&
        navRef.current &&
        window.scrollY < navRef.current.offsetTop
      ) {
        setMobileMenuOpen();
      }
    };

    document.addEventListener("mousedown", checkIfClickedOutside);
    document.addEventListener("scroll", checkScroll);

    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside);
      document.removeEventListener("scroll", checkScroll);
    };
  }, [mobileMenuOpen]);

  return (
    <NavContainer ref={navRef}>
      <Logo src={"./images/logo_light.svg"} />
      <HamburgerIcon
        openMenu={() => {
          if (navRef.current && window.scrollY >= navRef.current.offsetTop) {
            setMobileMenuOpen();
          }
        }}
      />
      <MobileMenuContainer ref={ref} className={mobileMenuOpen ? "active" : ""}>
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
    </NavContainer>
  );
}
