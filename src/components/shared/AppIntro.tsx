/** @jsxImportSource @emotion/react */

import React from "react";
import { css } from "@emotion/react";

function AppIntro({ children }: { children: string }) {
  return (
    // currently default app name is Notion AI
    <div
      css={css`
        font-size: 12px;
      `}
    >
      {children}
    </div>
  );
}

export { AppIntro };
