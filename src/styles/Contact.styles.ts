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
  padding: 2em;
  min-height: 50vh;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5em;

  @media only screen and (min-width: 480px) {
    gap: 2.25em;
  }

  @media only screen and (min-width: 768px) {
    gap: 3.25em;
  }

  @media only screen and (min-width: 1024px) {
    gap: 8em;
  }
`;

const CenterHex = styled.div`
  color: ${({ theme }) => theme.colors.black};
  font-size: 1rem;
  letter-spacing: 1px;
  font-weight: 700;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 113px;
  height: 127px;
  background: url("./images/Profile2.webp");
  background-blend-mode: overlay;
  background-color: ${({ theme }) => theme.colors.green};
  background-size: cover;
  background-position: center;
  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
  transform: translate(44%, 0%);

  @media only screen and (min-width: 480px) {
    width: 168px;
    height: 189px;
    font-size: 1.5rem;
  }

  @media only screen and (min-width: 768px) {
    width: 252px;
    height: 284px;
    font-size: 2.25rem;
  }

  @media only screen and (min-width: 1024px) {
    width: 378px;
    height: 425px;
    font-size: 3rem;
  }
`;

const SatelliteHex = styled.div<SatelliteProps>`
  transform: ${(props) => (props.shift ? props.shift : "")};
  width: 75px;
  height: 84px;
  background-color: ${({ theme }) => theme.colors.green};
  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  & img {
    width: 60%;
  }

  &:hover,
  &:focus {
    & img {
      animation: ${shake} 1s infinite linear;
    }
  }

  @media only screen and (min-width: 480px) {
    width: 112px;
    height: 126px;
    font-size: 1.5rem;
  }

  @media only screen and (min-width: 768px) {
    width: 168px;
    height: 189px;
    font-size: 2.25rem;
  }

  @media only screen and (min-width: 1024px) {
    width: 200px;
    height: 225px;
  }
`;

export { ContactContainer, Row, CenterHex, SatelliteHex };
