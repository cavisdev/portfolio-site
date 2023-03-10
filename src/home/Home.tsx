import { ArrowContainer, HomeContainer } from "../styles/Home.styles";
import { Link } from "react-scroll";
import Nameplate from "./Nameplate";

export default function Home() {
  return (
    <HomeContainer id="home">
      <Nameplate />
      <Link to="about" spy={true} smooth={true} offset={-52} duration={500}>
        <ArrowContainer aria-label={"Scroll Down"}>
          <img src="./images/ScrollArrow.svg" />
        </ArrowContainer>
      </Link>
    </HomeContainer>
  );
}
