import styled from "styled-components";
import { bounce } from "../animations/ScrollArrow.animation";

const HomeContainer = styled.div`
  position: relative;
  justify-content: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  width: 100%;
  margin-bottom: 8em;
`;

const Arrow = styled.img`
  position: absolute;
  width: 5%;
  bottom: 5%;
  cursor: pointer;
  transform: translate(-50%);
  &:hover, &:focus{
    animation: ${bounce} 1s infinite;
  }
`;

export { HomeContainer, Arrow };
