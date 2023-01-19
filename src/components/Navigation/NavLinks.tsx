import { NavLink } from "react-router-dom";
import {
  LinksContainer,
  LinkList,
  GradientLine,
} from "../../styles/NavLinks.styles";

export default function NavLinks() {
  return (
    <LinksContainer>
      <LinkList>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          about
        </NavLink>
        <NavLink
          to="/projects"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          projects
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          contact
        </NavLink>
      </LinkList>
      <GradientLine />
    </LinksContainer>
  );
}
