import styled from "styled-components";

interface Props {
  visible: boolean;
}

const NavContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    min-width: 302px;

    @media only screen and (min-width: 680px) {
        min-width: 130px;
        height: 144px;
    }
}
`;

const MobileView = styled.div`
  @media only screen and (min-width: 680px) {
    display: none;
  }
`

const MobileNav = styled.div<Props>`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 2rem;
  position: fixed;
  top: 0;
  right: ${(props) => (props.visible ? "0px" : "-200px")};
  transition: right 0.5s ease-out;
  height: 100%;
  min-height: 580px;
  width: 180px;
  padding-top: 2rem;
  padding-right: 2rem;
  z-index: 100;
  background: linear-gradient(
    180deg,
    ${({ theme }) => theme.colors.gray} 0%,
    ${({ theme }) => theme.colors.primary} 100%
  );
  box-shadow: 8px 0px 16px ${({ theme }) => theme.colors.secondary};

  @media only screen and (min-width: 680px) {
    display: none;
  }
`;

const Backdrop = styled.div<Props>`
  height: 100%;
  width: 100%;
  z-index: 50;
  position: fixed;
  top: 0;
  left: 0;
  display: ${(props) => (props.visible ? "block" : "none")};
`;

const DesktopNav = styled.div`
  display: none;

  @media only screen and (min-width: 680px) {
    display: flex;
  }
`;

export { MobileView, MobileNav, Backdrop, DesktopNav, NavContainer };
