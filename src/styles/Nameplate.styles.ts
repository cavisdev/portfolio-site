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
  background: linear-gradient(180deg, ${({theme}) => theme.colors.white} 0%, rgba(242, 244, 249, 0) 100%);
  background-clip: text;
  text-fill-color: transparent;
  -webkit-background-clip: text;
-webkit-text-fill-color: transparent;
animation: ${fadeIn} 1.5s ease-out;
animation-fill-mode: backwards;
animation-delay: 0.5s;
`;

const Position = styled.h3`
font-size: 5vw;
text-align: right;
  margin: 0;
  color: ${({ theme }) => theme.colors.green};
  font-weight: 300;
`;

const GradientLine = styled.div`
width: 2px;
background: linear-gradient(180deg, ${({theme}) => theme.colors.white} 0%, rgba(242, 244, 249, 0) 100%);
`;

const Skill = styled.h6`
  margin: 0;
  margin-top: 0.25em;
  font-weight: 300;
  font-size: 4vw;
`;

export { NameplateContainer, Column, Name, Position, GradientLine, Skill };
