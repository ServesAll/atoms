import { createGlobalStyle } from "styled-components";
import EestiRegular from "../../../assets/fonts/GTEestiProDisplay-Regular.ttf";
import EestiBold from "../../../assets/fonts/GTEestiProDisplay-Bold.ttf";

export const FontStyles = createGlobalStyle`
  @font-face {
    font-family: 'Eesti';
    src: url(${EestiRegular}) format('truetype');
    font-weight: 400;
  }

  @font-face {
    font-family: 'Eesti';
    src: url(${EestiBold}) format('truetype');
    font-weight: 700;
  }

  body {
    font-family: 'Eesti', sans-serif;
  }
`;
