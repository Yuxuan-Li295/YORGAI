import { css } from "@emotion/css";
import React from "react";

const BorderlessButton = ({
  onClick,
  children,
}: {
  onClick?: () => void,
  children: string,
}) => {
  return (
    <button
      className={css`
        width: 120px;
        height: 24px;
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #18181b;
        background-color: transparent;
        border: none;
        cursor: pointer;
      `}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export { BorderlessButton };
