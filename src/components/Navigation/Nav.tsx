import {
  Logo,
  NavContainer,
} from "../../styles/Nav.styles";
import HamburgerIcon from "./HamburgerIcon";

export default function Nav() {
  
  return (
    <NavContainer>
      <Logo src={"./images/logo_light.svg"} />
      <HamburgerIcon />
    </NavContainer>
  );
}
