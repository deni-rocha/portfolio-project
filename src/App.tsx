import Home from "./pages/Home";
import { Global, css, ThemeProvider } from "@emotion/react";
import theme from "./theme";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Global styles={stylesCss} />
        <Home />
      </ThemeProvider>
    </div>
  );
}

const stylesCss = css`
  .animationFadeIn {
    animation: fadeIn 2s linear;
  }
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export default App;
