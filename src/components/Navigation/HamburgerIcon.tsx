import { useStore } from "../../store/useStore";
import { Icon } from "../../styles/Icon.styles";

export default function HamburgerIcon() {
  const setMobileMenuOpen = useStore((state) => state.setMobileMenuOpen)

  return (
    <Icon
      xmlns="http://www.w3.org/2000/svg"
      className="icon icon-tabler icon-tabler-menu-2"
      width="44"
      height="44"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      onClick={() => setMobileMenuOpen()}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <line x1="6" y1="6" x2="18" y2="6" />
      <line x1="4" y1="12" x2="20" y2="12" />
      <line x1="6" y1="18" x2="18" y2="18" />
    </Icon>
  );
}
