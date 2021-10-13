import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
    margin: 0;
    padding: 0;
    font-size: 16px;
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap');
    font-family: 'Roboto', sans-serif;
    box-sizing: border-box;
    }
`;

export const themeDefault = {
  linerGradientColor:
    "linear-gradient(132.96deg, #C468FF 3.32%, #6E91F6 100%);",
  boxShadow:
    "0px 0px 1px rgba(0, 0, 0, 0.2), 0px 10px 20px rgba(0, 0, 0, 0.05);",

  //font sizes
  fontTiny: "10px",
  fontSmall: "14px",
  fontDefault: "16px",
  fontBig: "22px",
  fontLarge: "24px",
  fontExtraLarge: "40px",

  //border radius
  borderRadiusDefault: "30px",
};
