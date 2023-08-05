import React, { PropsWithChildren } from "react";
import { css } from "@emotion/css";
import { basis } from "components/constants/colors";
import { ReactComponent as ChatGPT } from "resources/img/ChatGPTsvg.svg";
import { ReactComponent as Cross } from "resources/img/Xsm.svg";

const ConfigSideBarBadge: React.FC<
  PropsWithChildren<{ variant?: "model" | "" | "additional" }>
> = ({ children, variant }) => {
  return (
    <div
      className={css`
        display: flex;
        height: 36px;
        padding: 2px 0px;
        align-items: center;
        gap: 2px;
      `}
    >
      <div
        className={css`
          display: flex;
          padding: 2px 6px;
          justify-content: center;
          align-items: center;
          gap: 8px;
          border-radius: 6px;
          background: ${basis.alt.bg};
        `}
      >
        <div
          className={css`
            display: flex;
            align-items: center;
            gap: 4px;
          `}
        >
          {variant === "model" && (
            <ChatGPT
              className={css`
                width: 18px;
                height: 18px;
                flex-shrink: 0;
                border-radius: 2.857px;
                border: 0.143px solid ${basis.border_subtle};
                background: #80a99d;
              `}
            />
          )}

          <div
            className={css`
              display: flex;
              height: 24px;
              padding: 0px 2px;
              justify-content: center;
              align-items: center;
            `}
          >
            <div
              className={css`
                color: ${basis.text_loud};
                text-align: center;
                font-family: PingFang SC;
                font-size: 14px;
                font-style: normal;
                font-weight: 500;
                line-height: 20px; /* 142.857% */
              `}
            >
              {children}
            </div>
          </div>
        </div>
        {variant !== "additional" && (
          <Cross
            className={css`
              width: 18px;
              height: 18px;
              flex-shrink: 0;
              margin-left: -3px;
              margin-right: -3px;
              cursor: pointer;
            `}
          />
        )}
      </div>
    </div>
  );
};

export { ConfigSideBarBadge };
