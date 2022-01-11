import { createServer } from "miragejs";

import { GlobalStyle } from "./styles/global";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";

import { Header } from "./components/Header";
import { Dashboard } from "./components/Dashboard";

createServer({
  routes() {
    this.namespace = "api";

    this.get("/transactions", () => {
      return [
        {
          id: 1,
          title: "Transaction 1",
          type: "deposit",
          category: "Food",
          amount: "12000",
          createAt: new Date(),
        },
        {
          id: 2,
          title: "Transaction 2",
          type: "withdraw",
          category: "Food",
          amount: "1000",
          createAt: new Date(),
        },
      ];
    });
  },
});

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      <Dashboard />
    </ThemeProvider>
  );
};
