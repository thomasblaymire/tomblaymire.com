import { createGlobalStyle } from "styled-components";

interface ThemeType {
  body: string;
  text: string;
}

const GlobalStyle = createGlobalStyle<{ theme: ThemeType }>`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  html {
    font-size: 10px;
    font-family: sans-serif;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    height: 100vh;
  }

  body {
    padding: 0;
    margin: 0;
    line-height: 2;
    font-family: 'Poppins', sans-serif;
    color: #FFF;
    height: inherit;
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};

  }

  a {
    line-height: 0;
  }

  h3 {
    margin: 0;
  }
`;

export const lightTheme = {
  body: "#e5e8ec",
  text: "#363537",
  toggleBorder: "#FFF",
  gradient: "linear-gradient(#39598A, #79D7ED)",

  colors: {
    primary: "#FFFFFF",
    secondary: "#000",
    tertiary: "#13131c",
    quaternary: "rgb(100, 107, 128)",
    blue: "#1b6ad2",
    textColorSub: "#a1a7bb",
    textColor: "#fff",
    // control-border-color: #40424e;
    // control-background-color: #222531;
    // control-caret-color: #858ca2;
    // control-dropdown-background-color: #323546;
    // theme-color: #6188ff;
    // theme-light-color: #171924;
    // theme-light-blue-color: rgba(56,97,251,0.1);
    // bt-light-blue: rgba(56,97,251,0.1);
    // theme-light-blue: rgba(56,97,251,0.1);
    // theme-light-blue-font: #6188ff;
    // text-color: #fff;
    // info-icon-color: #636c7f;

    // text-color-error: #ea3943;
    // border-color: #222531;
    // bg-color: #17171a;
    // color-primary-black: #fff;
    // color-primary-white: #000;
    // color-primary-blue: #6188ff;
    // color-light-neutral-1: #222531;
    // color-light-neutral-2: #323546;
    // color-light-neutral-3: #262628;
    // color-light-neutral-4: #646b80;
    // color-light-neutral-5: #858ca2;
    // color-light-neutral-6: #a1a7bb;
    // color-light-neutral-7: #646b80;
    // color-gradient-end: rgba(34,37,49,0);
    // button-border-color: #323546;
    // button-bg-color: #cfd6e4;
    // dark-bg: #323546;
    // card-bg: #292d3f;
    // box-shadow: 0px 0px 1px 0px #646b80;
    // tiny-box-shadow: 0px 4px 24px rgba(88,102,126,0.08),0px 1px 2px rgba(88,102,126,0.12);
    // input-shadow-color-focus: rgba(56,97,251,0.3);
    // shadow-normal: 0px 4px 24px #171924,0px 1px 2px #171924;
  },
  borders: {
    primary: "rgb(34, 37, 49)",
  },
};

const darkTheme = {
  body: "#1a1a25",
  colors: {
    primary: "#13131c",
    secondary: "#000",
    tertiary: "#13131c",
    quaternary: "rgb(100, 107, 128)",
    blue: "#1b6ad2",
    textColorSub: "#a1a7bb",
    textColor: "#fff",
  },
  borders: {
    primary: "rgb(34, 37, 49)",
  },
};

export { GlobalStyle, darkTheme };
