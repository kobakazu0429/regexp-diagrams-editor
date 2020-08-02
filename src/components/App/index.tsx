import React, { FC } from "react";
import { Global } from "@emotion/core";
import { GlobalStyle } from "@/theme/GlobalStyle";
import { createRouter } from "@/routes";
import { TopPage } from "@/pages/TopPage";

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
      <Global styles={GlobalStyle} />
      {Router}
    </>
  );
};
