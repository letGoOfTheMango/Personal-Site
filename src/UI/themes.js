import SpaceGrotesk from "../fonts/SpaceGrotesk.ttf";
import AquaGrotesque from "../fonts/AquaGrotesque.ttf";
import { createGlobalStyle } from "styled-components";
export const darkTheme = {
  body: "#404040",
  text: "#FFFFFF",
  heading: "#B0FF65",
  accents: "#9465FF",
  accentsHover: "#C90F82",
};
export const lightTheme = {
  body: "#F2EFEF",
  text: "#404040",
  heading: "#005B60",
  accents: "#C90F82",
  accentsHover: "#9465FF",
};

export const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'SpaceGrotesk';
    src: url(${SpaceGrotesk}) format('truetype');
    font-weight: 400;
    font-style: normal;
    font-display: auto;
  }
  @font-face {
    font-family: 'AquaGrotesque';
    src: url(${AquaGrotesque}) format('truetype');
    font-weight: 400;
    font-style: normal;
    font-display: auto;
  }
  html {
  scroll-behavior: smooth;
}
h1{
  font-family: "AquaGrotesque", sans-serif;
  text-transform: uppercase;
  color: ${(props) => props.theme.heading};
  font-size: 50px;
  line-height: 64px;
}
h2{
  font-family: "AquaGrotesque", sans-serif;
  text-transform: uppercase;
  color: ${(props) => props.theme.heading};
  font-size: 38px;
  line-height: 48px;
}
h3{
  font-family: "AquaGrotesque", sans-serif;
  text-transform: uppercase;
  color: ${(props) => props.theme.heading};
  font-size: 38px;
  line-height: 48px;
}
h4{
  font-family: "AquaGrotesque", sans-serif;
  text-transform: uppercase;
  color: ${(props) => props.theme.heading};
  font-size: 30px;
  line-height: 40px;
}
p{  
  font-size: 18px;
  line-height: 28px;
  font-family: "SpaceGrotesk", sans-serif;
  color: ${(props) => props.theme.text};
}
@media only screen and (max-width: 1536px) {
  h1{
    font-size: 40px;
    line-height: 52px;
    }
  h2{
    font-size: 32px;
    line-height: 40px;
    }
  h3{
    font-size: 32px;
    line-height: 40px;
    }
  h4{
    font-size: 30px;
    line-height: 40px;
    }
  }
@media only screen and (max-width: 1366px) {


  }
@media only screen and (max-width: 1024px) {
  h1{
    font-size: 30px;
    line-height: 52px;
    }
  h2{
    font-size: 26px;
    line-height: 32px;
    }
  h3{
    font-size: 26px;
    line-height: 32px;
    }
  h4{
    font-size: 22px;
    line-height: 30px;
    }
  }


  @media only screen and (max-width: 800px) {
    h1{
    font-size: 40px;
    line-height: 53px;
    margin-bottom: 0;
    }
  h2{
    font-size: 24px;
    line-height: 32px;
    }
  h3{
    font-size: 26px;
    line-height: 32px;
    }
  h4{
    font-size: 22px;
    line-height: 30px;
    }
  }


  body{
    background-color: ${(props) => props.theme.body};
    padding: 0;
    margin: 0;
  }
`;
