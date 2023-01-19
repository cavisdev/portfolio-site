import styled from "styled-components";

const NameplateContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  padding: 2rem 0;

  @media only screen and (min-width: 680px) {
    gap: 1rem;
}
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

const Name = styled.h1`
font-size: 4rem;
letter-spacing: 6px;
  margin: 0;
  margin-bottom: 0.5rem;
  background: linear-gradient(180deg, ${({theme}) => theme.colors.secondary} 0%, rgba(0, 0, 0, 0) 100%);
  background-clip: text;
  text-fill-color: transparent;
  -webkit-background-clip: text;
-webkit-text-fill-color: transparent;

@media only screen and (min-width: 680px) {
    font-size: 6rem;
    letter-spacing: 8px;
}
`;

const Position = styled.h3`
text-align: right;
width: 50%;
  margin: 0;
  color: ${({ theme }) => theme.colors.green};
  font-weight: 300;

  @media only screen and (min-width: 680px) {
    font-size: 1.5rem;
}
`;

const GradientLine = styled.div`
  ${({theme}) => theme.gradientLine};
`;

const Skill = styled.h6`
  margin: 0;
  margin-top: 0.25rem;
  font-weight: 300;
  font-size: 1rem;

  @media only screen and (min-width: 680px) {
    font-size: 1.25rem;
    margin-top: 0.5rem;
}
`;

export { NameplateContainer, Column, Name, Position, GradientLine, Skill };
