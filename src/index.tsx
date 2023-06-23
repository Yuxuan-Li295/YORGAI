/** @jsxImportSource @emotion/react */

import { Global, css } from "@emotion/react";
import { white } from "components/constants/colors";
import emotionReset from "emotion-reset";
import { Login } from "pages/Login";
import { PromptDetails } from "pages/PromptDetails";
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
        <Route path="/" element={<Navigate to="prompt/selected" replace />} />
        <Route path="login" element={<Login />} />
        <Route path="prompt/selected" element={<PromptSelected />} />
        <Route path="prompt/details" element={<PromptDetails />} />
        <Route path="prompt/complete">
          <Route path="text" element={<PromptText />} />
          <Route path="image" element={<PromptImage />} />
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
};

const rootElement = document.getElementById("root") as HTMLElement;

if (!rootElement) throw new Error("Failed to find the root element");
const root = createRoot(rootElement);

root.render(<App />);
