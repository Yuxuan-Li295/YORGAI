/** @jsxImportSource @emotion/react */

import React from "react";
import { css } from "@emotion/react";

function AppName({ children }: { children: string }) {
  return (
    // currently default app name is Notion AI
    <div>{children}</div>
  );
}

export { AppName };
