import styled from "styled-components";

const Icon = styled.svg`
@media only screen and (max-width: 767px) {
    display: block;
    stroke: ${({ theme }) => theme.colors.black};
    cursor: pointer;
    margin: 0.5em 0;

    &:hover {
        stroke: ${({ theme }) => theme.colors.white};
    }
}
`

export {Icon}