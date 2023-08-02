/** @jsxImportSource @emotion/react */

import { Global, css } from "@emotion/react";
import { white } from "components/constants/colors";
import emotionReset from "emotion-reset";
import { ImagePromptDetail } from "pages/ImagePromptDetail";
import { ImagePrompts } from "pages/ImagePrompts";
import { Login } from "pages/Login";
import { PopularPrompts } from "pages/PopularPrompts";
import { PopularTools } from "pages/PopularTools";
import { TextPromptDetail } from "pages/TextPromptDetail";
import { TextPrompts } from "pages/TextPrompts";
import { Tools } from "pages/Tools";
import { ToolsChat } from "pages/ToolsChat";
import { ToolsWriting } from "pages/ToolsWriting";
import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import { Helmet } from "react-helmet";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { ToolDetail } from "pages/ToolDetail";
import {
  FileMeta,
  FileStatus,
  UploadContext,
  UploadContextType,
} from "contexts/UploadContext";
import { UploadWidget } from "components/shared/UploadWidget";

declare global {
  var debugEnableWidget: () => void;
  var debugDisableWidget: () => void;
}

const App = () => {
  const [uploadWidgetVisibility, setUploadWidgetVisibility] =
    useState<boolean>(false);
  const [lastUploadIndex, setLastUploadIndex] = useState<number>(0);
  const [uploadFiles, setUploadFiles] = useState<Record<number, FileMeta>>(
    Object.fromEntries(
      [...Array(10)].map((_, i) => [
        i,
        {
          name: `file${i}`,
          type: "img",
          uploadTime: new Date().toString(),
          size: "1000 KB",
          status: FileStatus.Done,
        },
      ]),
    ),
  );

  useEffect(() => {
    globalThis.debugEnableWidget = () => setUploadWidgetVisibility(true);
    globalThis.debugDisableWidget = () => setUploadWidgetVisibility(false);
  });

  const uploadCtxVal: UploadContextType = {
    visibility: uploadWidgetVisibility,
    setVisibility: setUploadWidgetVisibility,
    files: uploadFiles,
    addFile: (file) => {
      // Why this is safe? Well, the value of MAX_SAFE_INTEGER in JavaScript is $2^{51} - 1$.
      // Suppose each file is only one byte large, this would result in petabytes of data,
      // which is unlikely storable in memory of a personal computer in recent future.
      if (lastUploadIndex === Number.MAX_SAFE_INTEGER) {
        // This is unreachable.
        throw new Error("Too many files");
      }
      const newIdx = lastUploadIndex + 1;
      setUploadFiles({ ...uploadFiles, [newIdx]: file });
      setLastUploadIndex(newIdx);
      return newIdx;
    },
    removeFile: (index) => {
      const { [index]: _, ...rest } = uploadFiles;
      setUploadFiles(rest);
    },
  };
  return (
    <>
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
      <UploadContext.Provider value={uploadCtxVal}>
        <Router />
        <UploadWidget />
      </UploadContext.Provider>
    </>
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
        <Route path="tool/chat" element={<ToolsChat />} />
        <Route path="tool/writing" element={<ToolsWriting />} />
        <Route path="tool" element={<Tools />} />
        <Route path="tool/detail" element={<ToolDetail />} />
        <Route path="tool" element={<Tools />} />
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
