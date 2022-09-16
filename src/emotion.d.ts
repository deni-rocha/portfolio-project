import "@emotion/react";

declare module "@emotion/react" {
  export interface Theme {
    background: string;
    backgroundLight: string;
    primary: string;
    secondary: string;
    gradient: string;
    text: string;
    textHighlight: string;
    textLight: string;
    border: string;
    inputBackground: string;
    error: string;
  }
}
