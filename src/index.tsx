/** @jsxImportSource @emotion/react */

import { Global, css } from "@emotion/react";
import { white } from "components/constants/colors";
import emotionReset from "emotion-reset";
import { Login } from "pages/Login";
import { PromptDetails } from "pages/PromptDetails";
import { PromptImageDetails } from "pages/PromptImageDetails";
import { PromptImage } from "pages/PromptImage";
import { PromptSelected } from "pages/PromptSelected";
import { PromptText } from "pages/PromptText";
import React from "react";
import { createRoot } from "react-dom/client";
import { Helmet } from "react-helmet";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <React.Fragment>
      <Helmet>
        <meta name="theme-color" content={white} />
      </Helmet>
      <Global
        styles={css`
          ${emotionReset}
          html {
            font-family: "PingFang SC", sans-serif;
            font-style: normal;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
            font-smooth: never;
          }
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
        <Route path="login" element={<Login />} />
        <Route path="prompt/selected" element={<PromptSelected />} />
        <Route path="prompt/complete/details" element={<PromptDetails />} />
        <Route path="prompt/complete/text" element={<PromptText />} />
        <Route path="prompt/complete/image" element={<PromptImage />} />
        <Route path="prompt/complete/image/details" element={<PromptImageDetails />} />
        <Route
          path="prompt"
          element={<Navigate to="prompt/selected" replace />}
        />
        <Route path="" element={<Navigate to="prompt/selected" replace />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
};

const rootElement = document.getElementById("root") as HTMLElement;

if (!rootElement) throw new Error("Failed to find the root element");
const root = createRoot(rootElement);

root.render(<App />);
