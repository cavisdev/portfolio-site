import styled from "styled-components";

const NavContainer = styled.div`
  z-index: 100;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  padding: 1em 1.5em;
  width: 100%;
  background: linear-gradient(270deg, ${({ theme }) => theme.colors.green} 0%, ${({ theme }) => theme.colors.green} 80%, ${({ theme }) => theme.colors.black} 80%);
`;

const Logo = styled.img`
  width: 2rem;
  height: 2rem;
`

const MobileMenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  gap: 1em;
  right: -100%;
  top: 13.5%;
  transition: right 0.1s linear;

  &.active {
    right: 0;
  }
`

const MobileLink = styled.div`
text-align: right;
padding: 1em;
padding-left: 2em;
background-color: ${({ theme }) => theme.colors.green};
box-shadow: -2px 2px ${({theme}) => theme.colors.white};
`

export { NavContainer, Logo, MobileMenuContainer, MobileLink };
