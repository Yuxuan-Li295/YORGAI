/** @jsxImportSource @emotion/react */

import { Global, css } from "@emotion/react";
import emotionReset from "emotion-reset";
import React from "react";
import { createRoot } from "react-dom/client";
import { Helmet } from "react-helmet";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "pages/Home";

const App = () => {
  return (
    <React.Fragment>
      <Helmet>
        <meta name="theme-color" content="#131619" />
      </Helmet>
      <Global
        styles={css`
          ${emotionReset}
        `}
      />
      <Router />
    </React.Fragment>
  );
};

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home />} path="/" />
      </Routes>
    </BrowserRouter>
  );
};

const rootElement = document.getElementById("root") as HTMLElement;

if (!rootElement) throw new Error("Failed to find the root element");
const root = createRoot(rootElement);

root.render(<App />);
