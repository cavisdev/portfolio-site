import styled from "styled-components";

const LinksContainer = styled.div`
display: flex;
gap: 1rem;
`

const LinkList = styled.ul`
display: flex;
flex-direction: column;
text-align: right;
font-size: 1.5rem;
font-weight: 300;
gap: 1rem;
margin: 0;
padding: 0;

& * {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.white};
    opacity: 0.5;
}

& *:hover {
    color: ${({ theme }) => theme.colors.green};
    opacity: 1;
}

& *.active {
    font-weight: 700;
    opacity: 1;
}
`

export {LinksContainer, LinkList}