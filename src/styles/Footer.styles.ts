import styled from "styled-components";

const FooterContainer = styled.div`
min-width:302px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 1rem;
`
const Copyright = styled.p`
    margin: 0;
    margin-right: auto;
    font-size: 0.75rem;
    align-self: flex-end;
    letter-spacing: 0.75px;
`

const SocialLink = styled.a`
    opacity: 0.5;
    cursor: pointer;

    &:hover {
        opacity: 1;
    }

    & img {
        height: 32px;
        stroke: ${({theme}) => theme.colors.green};
    }
`

const ModeSwitch = styled.div`
    height: 32px;
    cursor: pointer;
    
    & img {
        height: 100%;
    }
`

export {FooterContainer, Copyright, SocialLink, ModeSwitch}