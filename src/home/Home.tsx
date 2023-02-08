import { Arrow, HomeContainer } from "../styles/Home.styles";
import { Link } from "react-scroll";
import Nameplate from "./Nameplate";

export default function Home() {
  return (
    <HomeContainer>
      <Nameplate />
      <Link to="about" spy={true} smooth={true} offset={-64} duration={500}>
        <Arrow src="./images/ScrollArrow.svg" />
      </Link>
    </HomeContainer>
  );
}
