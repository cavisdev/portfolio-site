import {
  HomeContainer,
  Welcome,
} from "../styles/Home.styles";
import Nameplate from "./Nameplate";

export default function Home() {
  return (
      <HomeContainer>
      <Nameplate />
      <Welcome>
        Hello! My name is Cameron Avis, and I’m a front-end developer based in
        Portland, OR. Welcome to my portfolio!
          </Welcome>
    </HomeContainer>
  );
}
