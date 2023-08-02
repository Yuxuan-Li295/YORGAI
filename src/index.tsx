/** @jsxImportSource @emotion/react */

import { Global, css } from "@emotion/react";
import { white } from "components/constants/colors";
import emotionReset from "emotion-reset";
import { ImagePromptDetail } from "pages/ImagePromptDetail";
import { ImagePrompts } from "pages/ImagePrompts";
import { Login } from "pages/Login";
import { OnlineTool } from "pages/OnlineTool";
import { PopularPrompts } from "pages/PopularPrompts";
import { PopularTools } from "pages/PopularTools";
import { TextPromptDetail } from "pages/TextPromptDetail";
import { TextPrompts } from "pages/TextPrompts";
import { ToolDetail } from "pages/ToolDetail";
import { Tools } from "pages/Tools";
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
        <Route path="prompt/popular" element={<PopularPrompts />} />
        <Route path="prompt/text" element={<TextPrompts />} />
        <Route path="prompt/text/detail" element={<TextPromptDetail />} />
        <Route path="prompt/image" element={<ImagePrompts />} />
        <Route path="prompt/image/detail" element={<ImagePromptDetail />} />
        <Route path="tool/popular" element={<PopularTools />} />
        <Route path="tool" element={<Tools />} />
        <Route path="tool/detail" element={<ToolDetail />} />
        <Route path="online-tool" element={<OnlineTool />} />
        <Route path="" element={<Navigate to="prompt/popular" replace />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
};

const rootElement = document.getElementById("root") as HTMLElement;

if (!rootElement) throw new Error("Failed to find the root element");
const root = createRoot(rootElement);

root.render(<App />);
