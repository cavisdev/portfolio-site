import styled from "styled-components";

interface MobileMenuProps {
  topLocation: number;
}

const NavContainer = styled.div`
  z-index: 20;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  padding: 0.5em 1.5em;
  width: 100%;
  background: linear-gradient(270deg, ${({ theme }) => theme.colors.green} 0%, ${({ theme }) => theme.colors.green} 78%, ${({ theme }) => theme.colors.black} 78%);
  border-bottom: 4px solid ${({theme}) => theme.colors.white};
`;

const Logo = styled.img`
  width: 2rem;
  height: 2rem;
`

const MobileMenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  position: absolute;
  gap: 1em;
  right: 0;
  top: 80px;
  width: 0px;
  overflow: hidden;
  transition: width 0.25s ease-in-out;

  &.active {
    width: 152px; 
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
width: 112px;
background-color: ${({ theme }) => theme.colors.gray};
border-left: 2px solid ${({ theme }) => theme.colors.white};
border-bottom: 2px solid ${({ theme }) => theme.colors.white};
cursor: pointer;
transition: width 0.25s linear;

&:hover, &focus { 
  width:  148px;
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
