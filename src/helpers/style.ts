import { createGlobalStyle } from 'styled-components';

interface ThemeType {
  body: string;
  text: string;
}

export enum THEME {
  LIGHT = 'light',
  DARK = 'dark',
}

const GlobalStyle = createGlobalStyle<{ theme: ThemeType }>`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
    border: 0 solid #e5e7eb;
    margin: 0;
  }

  html {
    font-size: 10px;
    line-height: 1.5;
    tab-size: 4;
    height: 100vh;
  }

  body {
    padding: 0;
    margin: 0;
    line-height: inherit;
    tab-size: 4;
    font-family: ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color emoji;
    color: #FFF;
    height: 100%;
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};


  }

  a {
    line-height: 0;
    color: inherit;
    text-decoration: none;
  }

  ul,li, ol {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  

  dd {
    margin: 0;
  }

  blockquote, dd, dl, figure, h1, h2, h3, h4, h5, h6, hr, p, pre {
    margin: 0;
  }
`;

export const lightTheme = {
  body: 'rgb(0 0 0/ 1)',
  text: '#a1a1aa',
  toggleBorder: '#FFF',
  gradient: 'linear-gradient(#39598A, #79D7ED)',

  colors: {
    primary: '#FFFFFF',
    secondary: '#000',
    // tertiary: '#18181b',
    tertiary: '#eeee;',
    quaternary: 'rgb(100, 107, 128)',
    blue: '#1b6ad2',
    textColorSub: 'rgb(82, 82, 91, 1)',
    textColor: 'rgb(39, 39, 42, 1)',
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
    primary: 'rgb(34, 37, 49)',
  },
};

const darkTheme = {
  body: 'rgb(0 0 0/ 1)',
  colors: {
    primary: '#18181b',
    secondary: '#000',
    tertiary: '#18181b',
    quaternary: 'rgb(100, 107, 128)',
    blue: '#1b6ad2',
    textColorSub: 'rgb(161, 161, 170, 1)',
    textColor: 'rgb(244, 244, 245, 1)',
  },
  borders: {
    primary: 'rgb(34, 37, 49)',
  },
};

export { darkTheme, GlobalStyle };
