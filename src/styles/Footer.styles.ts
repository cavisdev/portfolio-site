import styled from "styled-components"

const FooterContainer = styled.div`
    background-color: ${({ theme }) => theme.colors.green};
    clip-path: polygon(0% 0%, 50% 30%, 100% 0%, 100% 100%, 0% 100%);
    padding: 2em;
    text-align: center;

    & p {
        margin: 0;
        margin-top: 2em;
        font-size: 1rem;
    }
`

export {FooterContainer}