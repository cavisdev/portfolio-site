import styled from "styled-components";

const Insert = styled.div`
    width: 100%;
    height: 25vw;
    background-color: ${({ theme }) => theme.colors.green};
    clip-path: polygon(0% 20%, 50% 50%, 100% 20%, 100% 30%, 50% 60%, 0% 30%, 
                    0% 40%, 50% 70%, 100% 40%, 100% 50%, 50% 80%, 0% 50%);
`

export {Insert}