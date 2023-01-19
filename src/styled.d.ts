import "styled-components";
import { CSSObject, CSSProp } from "styled-components";
import lightTheme from "./styles/Theme.styles"


declare module "styled-components" {
    type Theme = typeof lightTheme;
    export interface DefaultTheme extends Theme {}
}