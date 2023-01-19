import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
}

body {
    font-family: "Josefin Sans", sans-serif;
    margin: 0;
    padding: 2rem;
    color: ${({theme}) => theme.colors.secondary};
    background: linear-gradient(180deg, ${({theme}) => theme.colors.gray} 0%, ${({theme}) => theme.colors.primary} 100%);
    min-height: 100vh;
}
`

export {GlobalStyle}