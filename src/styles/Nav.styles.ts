import styled from "styled-components";

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  padding: 1em 1.5em;
  width: 100%;
  background: linear-gradient(270deg, ${({ theme }) => theme.colors.green} 0%, ${({ theme }) => theme.colors.black} 50.52%);
`;

const Logo = styled.img`
  width: 8vw;
  height: 8vw;
`

export { NavContainer, Logo };
