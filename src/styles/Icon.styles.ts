import styled from "styled-components";

const Icon = styled.svg`
@media only screen and (max-width: 679px) {
    display: block;
    stroke: ${({ theme }) => theme.colors.white};
    cursor: pointer;

    &:hover {
        stroke: ${({ theme }) => theme.colors.green};
    }
}
`

export {Icon}