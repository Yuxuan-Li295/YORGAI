import { css } from "@emotion/css";
import { basis, primary, transparent } from "components/constants/colors";
import React from "react";

const ButtonGroupCell = ({
  children,
  active = false,
  size = "xs",
  onClick,
}: {
  children: string;
  active?: boolean;
  size?: "xs" | "sm";
} & React.ButtonHTMLAttributes<{}>) => {
  return (
    <button
      className={css`
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 6px 12px;
        color: ${active ? primary.text : basis.text};
        gap: 10px;
        background: ${active ? basis.bg_subtle : transparent};
        border-radius: 6px;
        border: none;
        white-space: nowrap;
        font-family: inherit;
        min-width: 104px;

        &:hover {
          color: ${active ? primary.text : basis.text_muted};
          background: ${basis.bg};
        }
      `}
      onClick={onClick}
    >
      <div
        className={css`
          font-weight: 500;
          font-size: ${size === "sm" ? "14px" : "12px"};
          line-height: ${size === "sm" ? "20px" : "16px"};
        `}
      >
        {children}
      </div>
    </button>
  );
};

export { ButtonGroupCell };
