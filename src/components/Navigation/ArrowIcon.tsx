import { Icon } from "../../styles/Icon.styles";

export default function ArrowIcon({handleClick}: any) {

  return (
    <Icon
      xmlns="http://www.w3.org/2000/svg"
      className="icon icon-tabler icon-tabler-arrow-right"
      width="44"
      height="44"
      viewBox="0 0 24 24"
      strokeWidth="1"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      onClick={handleClick}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <line x1="5" y1="12" x2="19" y2="12" />
      <line x1="13" y1="18" x2="19" y2="12" />
      <line x1="13" y1="6" x2="19" y2="12" />
    </Icon>
  );
}
