import { useStore } from "../../store/useStore";
import {
  Backdrop,
  DesktopNav,
  MobileNav,
  MobileView,
  NavContainer,
} from "../../styles/Nav.styles";
import ArrowIcon from "./ArrowIcon";
import HamburgerIcon from "./HamburgerIcon";
import NavLinks from "./NavLinks";

export default function Nav() {
const mobileMenuOpen = useStore((state) => state.mobileMenuOpen)
  const setMobileMenuOpen = useStore((state) => state.setMobileMenuOpen)
  
  return (
    <NavContainer>
      <MobileView>
      <HamburgerIcon />
      <Backdrop visible={mobileMenuOpen ? true : false} onClick={() => setMobileMenuOpen()} />
      <MobileNav visible={mobileMenuOpen ? true : false}>
        <ArrowIcon handleClick={() => setMobileMenuOpen()}/>
        <NavLinks />
      </MobileNav>
      </MobileView>
      <DesktopNav>
        <NavLinks />
      </DesktopNav>
    </NavContainer>
  );
}
