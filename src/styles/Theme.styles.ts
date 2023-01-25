import { DefaultTheme } from "styled-components";

const mainDisplayStyle = `
display: flex;
flex-direction: column;
align-items: center;
min-height: calc(100vh - 140px);
min-width:302px;
width: 100%;

@media only screen and (min-width: 680px) and (orientation: landscape) {
min-height: calc(100vh - 100px);
}

@media only screen and (min-width: 680px) and (orientation: portrait) {
min-height: calc(100vh - 244px);
}
`

const gradientLineStyle = `
width: 2px;
background: linear-gradient(180deg, #25221D 0%, rgba(0,0,0,0) 100%);
`

const lightTheme: DefaultTheme = {
  colors: {
    primary: "#F2F4F9",
    white: "#F2F4F9",
    secondary: "#25221D",
    black: "#25221D",
    gray: "#E5E8F0",
    green: "#6BB232",
  },
  mainDisplay: mainDisplayStyle,
  gradientLine: gradientLineStyle,
};

const darkTheme: DefaultTheme = {
  colors: {
    primary: "#25221D",
    white: "#F2F4F9",
    secondary: "#F2F4F9",
    black: "#25221D",
    gray: "#555659",
    green: "#6BB232",
  },
  mainDisplay: mainDisplayStyle,
  gradientLine: gradientLineStyle,
};

export { lightTheme, darkTheme };
