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

const ArrowContainer = styled.div`
  position: absolute;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  bottom: 10%;
  height: 64px;
  width: 64px;
  transform: translate(-50%);
  cursor: pointer;

  & img {
    width: 50%;
  }

  &:hover img, &:focus img {
    animation: ${bounce} 1s infinite;
  }
`

export { HomeContainer, ArrowContainer};
