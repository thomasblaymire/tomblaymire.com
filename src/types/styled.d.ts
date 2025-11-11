import 'styled-components';

interface ThemeColors {
  primary: string;
  secondary: string;
  tertiary: string;
  quaternary: string;
  textColorSub?: string;
  textColor: string;
  textHeading: string;
}

interface ThemeBorders {
  primary: string;
}

declare module 'styled-components' {
  export interface DefaultTheme {
    body: string;
    text?: string;
    toggleBorder?: string;
    gradient?: string;
    colors: ThemeColors;
    borders: ThemeBorders;
  }
}
