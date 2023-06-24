import { css } from "@emotion/css";
import { basis } from "components/constants/colors";
import React from "react";
import { PromptCardLegend } from "./PromptCardLegend";

export const PromptCard: React.FC<
  React.PropsWithChildren<{ likeCount: number; runCount: number }>
> = ({ children, likeCount, runCount }) => (
  <div
    className={css`
      overflow: hidden;
      display: flex;
      flex: 388px 0 1;
      flex-direction: column;
      justify-content: stretch;
      align-items: stretch;
      padding: 0px;
      border-radius: 8px;
      cursor: pointer;
      height: 206px;
      background-color: white;
      border: 1px solid ${basis.border_subtle};
    `}
  >
    <div
      className={css`
        display: flex;
        padding: 16px;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;
        flex: 1 0 0;
        align-self: stretch;
        gap: 11px;
      `}
    >
      {children}
    </div>
    <PromptCardLegend likeCount={likeCount} runCount={runCount} />
  </div>
);
