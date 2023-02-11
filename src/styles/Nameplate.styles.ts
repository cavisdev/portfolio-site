import styled from "styled-components";
import { fadeIn, fade } from "../animations/Nameplate.animation";

const NameplateContainer = styled.div`
  display: flex;
  gap: 0.75em;
  width: 100vw;
  justify-content: center;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;

  &.fadeDown {
    animation: ${fade} 1.25s ease-in;
    animation-fill-mode: backwards;
    animation-delay: 1s;
  }
`;

const Name = styled.h1`
  font-size: 16vw;
  letter-spacing: 6px;
  margin: 0;
  margin-bottom: 0.5rem;
  background: linear-gradient(
    180deg,
    ${({ theme }) => theme.colors.white} 0%,
    rgba(242, 244, 249, 0) 100%
  );
  background-clip: text;
  text-fill-color: transparent;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: ${fadeIn} 1.5s ease-out;
  animation-fill-mode: backwards;
  animation-delay: 0.5s;

  @media only screen and (min-width: 600px) {
    font-size: 12vw;
  }

  @media only screen and (min-width: 1280px) {
    font-size: 8vw;
  }
`;

const Position = styled.h3`
  font-size: 1.25rem;
  text-align: right;
  margin: 0;
  color: ${({ theme }) => theme.colors.green};
  font-weight: 300;

  @media only screen and (min-width: 768px) {
    font-size: 1.75rem;
  }

  @media only screen and (min-width: 768px) {
    font-size: 2rem;
  }
`;

const GradientLine = styled.div`
  width: 2px;
  background: linear-gradient(
    180deg,
    ${({ theme }) => theme.colors.white} 0%,
    rgba(242, 244, 249, 0) 100%
  );

  @media only screen and (min-width: 600px) {
    width: 4px;
  }
`;

const Skill = styled.h6`
  margin: 0;
  margin-top: 0.25em;
  font-weight: 300;
  font-size: 0.9rem;

  @media only screen and (min-width: 768px) {
    font-size: 1.4rem;
  }
`;

export { NameplateContainer, Column, Name, Position, GradientLine, Skill };
