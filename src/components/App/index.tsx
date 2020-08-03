import React, { FC } from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Global } from "@emotion/core";
import { GlobalStyle } from "@/theme/GlobalStyle";
import { createRouter } from "@/routes";
import { TopPage } from "@/pages/TopPage";
import { ReactDiagramsContextProvider } from "../../Contexts/ReactDiagramsContext";

const theme = createMuiTheme({ palette: { type: "dark" } });
const routes = [
  {
    exact: true,
    path: "/",
    component: TopPage
  }
];

const Router = createRouter({ routes });

export const App: FC = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Global styles={GlobalStyle} />
        <ReactDiagramsContextProvider>{Router}</ReactDiagramsContextProvider>
      </ThemeProvider>
    </>
  );
};
