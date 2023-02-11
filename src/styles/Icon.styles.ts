import styled from "styled-components";

const Icon = styled.svg`
@media only screen and (max-width: 767px) {
    display: block;
    stroke: ${({ theme }) => theme.colors.black};
    cursor: pointer;

    &:hover {
        stroke: ${({ theme }) => theme.colors.white};
    }
}
`

export {Icon}