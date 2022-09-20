import Home from "./pages/Home";
import { Global, css, ThemeProvider } from "@emotion/react";
import theme from "./theme";
import { ContainerLayout } from "./components/Layout/styles";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Global styles={stylesCss} />
        <ContainerLayout>
          <Home />
        </ContainerLayout>
      </ThemeProvider>
    </div>
  );
}

const stylesCss = css`
  .animationBounce {
    animation: bounce 1s linear;
  }

  @keyframes bounce {
    from {
      transform: scale(0.4);
      transform: scale(0.4);
    }

    to {
      transform: scale(1);
      transform: scale(1);
    }
  }
  .animationFadeIn {
    animation: fadeIn 1s linear;
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
