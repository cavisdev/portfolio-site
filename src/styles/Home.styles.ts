import styled from "styled-components";
import { bounce } from "../animations/ScrollArrow.animation";

const HomeContainer = styled.div`
  position: relative;
  justify-content: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  margin-bottom: 8em;
`;

const Arrow = styled.img`
  position: absolute;
  width: 5%;
  bottom: 10%;
  cursor: pointer;
  transform: translate(-50%);
  &:hover, &:focus{
    animation: ${bounce} 1s infinite;
  }

  @media only screen and (min-width: 1280px) {
    width: 2%;
  }
`;

export { HomeContainer, Arrow };
