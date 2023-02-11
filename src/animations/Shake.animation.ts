import { keyframes } from "styled-components"

const shake = keyframes`
    0% {
        transform: rotate(0deg);
    }

    25% {
        transform: rotate(20deg);
    }

    50% {
        transform: rotate(0deg);
    }

    75% {
        transform: rotate(-20deg);
    }

    100% {
        transform: rotate(0deg);
    }
`

export {shake}