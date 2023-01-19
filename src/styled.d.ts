import "styled-components";
import { CSSObject, CSSProp } from "styled-components";
import lightTheme from "./styles/Theme.styles"


declare module "styled-components" {
    export interface DefaultTheme{
        colors: Color,
          mainDisplay: string;
          gradientLine: string;
    }
}

type Color = {
    [key: string]: string;
}