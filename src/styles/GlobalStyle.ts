import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
}

body {
    font-family: "Josefin Sans", sans-serif;
    margin: 0;
    color: ${({theme}) => theme.colors.white};
    background: ${({theme}) => theme.colors.black};
    min-height: 100vh;
}
`

export {GlobalStyle}