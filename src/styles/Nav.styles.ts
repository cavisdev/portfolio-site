import styled from "styled-components";

const NavContainer = styled.nav`
  z-index: 20;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  padding: 0 1.5em;
  background: linear-gradient(270deg, ${({ theme }) => theme.colors.green} 0%, ${({ theme }) => theme.colors.green} 78%, ${({ theme }) => theme.colors.black} 78%);
  border-bottom: 4px solid ${({theme}) => theme.colors.white};
`;

const Logo = styled.img`
  width: 2rem;
  height: 2rem;
`

const MobileMenuContainer = styled.ol`
  display: flex;
  margin: 0;
  flex-direction: column;
  align-items: flex-end;
  position: absolute;
  gap: 1em;
  padding: 0;
  padding-bottom: 0.5rem;
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

  & > * {
    background-color: ${({ theme }) => theme.colors.gray};
  }

  & > *.active, & > *:hover {
    background-color: ${({ theme }) => theme.colors.green};
  }
`

const MobileLink = styled.li`
margin: 0;
display: block;
z-index: 100;
text-align: right;
padding: 1em;
padding-left: 2em;
width: 112px;
box-shadow: -2px 2px ${({ theme }) => theme.colors.white};
cursor: pointer;
transition: width 0.25s linear;

&:hover, &focus { 
  width:  148px;
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

const DesktopMenuContainer = styled.ol`
display: none;
margin: 0;
list-style-type: none;

@media only screen and (min-width: 768px) {
  display: flex;
}

& > * {
  padding: 0.5em 1em;
  font-size: 1.5rem;
  cursor: pointer;
  color: ${({theme}) => theme.colors.black};
}

& > *:hover, & > *:focus {
  background-color: ${({ theme }) => theme.colors.gray};
  color: ${({theme}) => theme.colors.white};
}

& > *.active {
  background-color: ${({ theme }) => theme.colors.black};
  color: ${({theme}) => theme.colors.white};
}
`

export { NavContainer, Logo, MobileMenuContainer, MobileLink, Backdrop, DesktopMenuContainer};
