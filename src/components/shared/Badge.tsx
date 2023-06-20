import { css } from "@emotion/css";
import React from "react";

export const Badge: React.FC<{ text: string; avatar?: React.ReactElement }> = ({
  text,
  avatar,
}) => (
  <span
    className={css`
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      background: rgba(188, 189, 194, 0.1);
      border-radius: 108px;
      font-family: "PingFang SC";
      font-style: normal;
      font-weight: 500;
      font-size: 12px;
      line-height: 16px;
      color: #707480;
    `}
  >
    {avatar}
    <span
      style={{ padding: avatar === undefined ? "2px 8px" : "2px 8px 2px 4px" }}
    >
      {text}
    </span>
  </span>
);
