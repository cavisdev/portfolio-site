import styled from "styled-components";

const HomeContainer = styled.div`
  ${({ theme }) => theme.mainDisplay};
  justify-content: center;
  min-height: 302px;
`;

const Welcome = styled.p`
  margin: 0;
  font-weight: 300;
  width: 80%;
  line-height: 2rem;

  @media only screen and (min-width: 680px) {
    font-size: 1.25rem;
  }
`;
export { HomeContainer, Welcome };
