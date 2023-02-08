import { keyframes } from "styled-components"

const fadeIn = keyframes`
    from {margin-right: 100%; opacity: 0;}
    to {margin-right: 0; opacity: 1;}
`

const fade = keyframes`
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
`

export {fadeIn, fade}