import styled from "styled-components";

const NavContainer = styled.div`
  z-index: 20;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  padding: 1em 1.5em;
  width: 100%;
  background: linear-gradient(270deg, ${({ theme }) => theme.colors.green} 0%, ${({ theme }) => theme.colors.green} 78%, ${({ theme }) => theme.colors.black} 78%);
`;

const Logo = styled.img`
  width: 2rem;
  height: 2rem;
`

const MobileMenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  position: fixed;
  gap: 1em;
  right: -100%;
  top: 90px;
  transition: right 0.25s linear;

  &.active {
    right: 0;
  }

  @media only screen and (min-width: 768px) {
    display: none;
  }
`

const MobileLink = styled.div`
z-index: 100;
text-align: right;
padding: 1em;
padding-left: 2em;
width: 30vw;
background-color: ${({ theme }) => theme.colors.gray};
box-shadow: -2px 2px ${({ theme }) => theme.colors.white};
cursor: pointer;
transition: width 0.25s linear;

&:hover, &focus { 
  width:  40vw;
  background-color: ${({ theme }) => theme.colors.green};
}


`
const Backdrop = styled.div`
    z-index: -10;
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;

    @media only screen and (min-width: 768px) {
      display: none;
    }
`

const DesktopMenuContainer = styled.div`
display: none;

@media only screen and (min-width: 768px) {
  display: flex;
}
`

const DesktopLink = styled.div`
  padding: 0 1em;
  font-size: 1.5rem;
  cursor: pointer;
  color: ${({theme}) => theme.colors.black};

  &:hover, &:focus {
    color: ${({theme}) => theme.colors.white};
  }
`

export { NavContainer, Logo, MobileMenuContainer, MobileLink, Backdrop, DesktopMenuContainer, DesktopLink };
