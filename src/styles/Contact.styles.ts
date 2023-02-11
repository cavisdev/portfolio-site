import styled from "styled-components";
import { shake } from "../animations/Shake.animation";

interface SatelliteProps {
  shift?: string;
}

const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 4em 0;
  min-height: 50vh;
  width: 100%;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  gap: 8vw;
`;

const CenterHex = styled.div`
  color: ${({ theme }) => theme.colors.black};
  font-size: 5vw;
  letter-spacing: 1px;
  font-weight: 700;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30vw;
  height: 33.75vw;
  background: url("./images/Profile2.webp");
  background-blend-mode: overlay;
  background-color: ${({ theme }) => theme.colors.green};
  background-size: cover;
  background-position: center;
  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
  transform: translate(45%, 0%);
`;

const SatelliteHex = styled.div<SatelliteProps>`
  transform: ${(props) => (props.shift ? props.shift : "")};
  width: 20vw;
  height: 22.5vw;
  background-color: ${({ theme }) => theme.colors.green};
  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  & img {
    width: 60%;
  }

  &:hover, &:focus {
    & img {
      animation: ${shake} 1s infinite linear;
    }
  } 
`;

export { ContactContainer, Row, CenterHex, SatelliteHex };
