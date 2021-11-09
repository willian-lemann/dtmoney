import { GlobalStyle } from "./styles/global";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";

import { Header } from "./components/Header";
import { Dashboard } from "./components/Dashboard";

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      <Dashboard />
    </ThemeProvider>
  );
};
