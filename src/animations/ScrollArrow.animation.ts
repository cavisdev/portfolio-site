import { keyframes } from "styled-components";

const bounce = keyframes`
    0% {
        margin-bottom: 0;
    }

    50% {
        margin-bottom: 50%;
    }
    
    100% {
        margin-bottom: 0;
    }
`;

export { bounce };
