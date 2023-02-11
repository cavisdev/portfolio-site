import styled from "styled-components";

const Insert = styled.div`
    width: 100%;
    height: 25vw;
    background-color: ${({ theme }) => theme.colors.green};
    clip-path: polygon(0% 0%, 50% 20%, 100% 0%, 100% 50%, 50% 70%, 0% 50%);
`

export {Insert}