import { css } from "@emotion/css";
import { basis } from "components/constants/colors";
import React, { ReactElement } from "react";

const Button = ({
  children,
  variant = "primary",
  size = "xs",
  icon,
}: {
  children: string;
  variant?: "primary" | "secondary";
  size?: "xs" | "sm";
  icon?: ReactElement;
} & React.ButtonHTMLAttributes<{}>) => {
  // FIXME: the last variant of button
  const primary = (
    <button
      className={css`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: #67cdbc;
        padding: 0;
        border-radius: 6px;
        border: none;
        box-shadow: 0px 0px 0px 1px #74b6a9;
        font-family: inherit;
        white-space: nowrap;
        height: ${size === "sm" ? 32 : "auto"};

        &:hover {
          background-color: #57c4b1;
        }

        &:active {
          background-color: #14b8a2;
        }

        &:hover > div {
          background: linear-gradient(#57c4b1, #57c4b1) padding-box,
            linear-gradient(to bottom, #ffffff52, #ffffff00 60%) border-box;
        }

        &:active > div {
          background: linear-gradient(#14b8a2, #14b8a2) padding-box,
            linear-gradient(to bottom, #ffffff52, #ffffff00 60%) border-box;
        }
      `}
    >
      <div
        className={css`
          flex: 1;
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          gap: 10px;
          background: linear-gradient(#67cdbc, #67cdbc) padding-box,
            linear-gradient(to bottom, #ffffff52, #ffffff00 60%) border-box;
          padding: 5px 11px;
          border: 1px solid transparent;
          border-radius: 6px;
          color: white;
        `}
      >
        {icon}
        <div
          className={css`
            font-weight: 500;
            font-size: ${size === "sm" ? "14px" : "12px"};
            line-height: ${size === "sm" ? "20px" : "16px"};
          `}
        >
          {children}
        </div>
      </div>
    </button>
  );
  const secondary = (
    <button
      className={css`
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 6px 12px;
        color: ${basis.text};
        gap: 10px;
        background: white; // TODO: fill.base.layer_chrome
        box-shadow: 0px 1px 1px rgba(188, 189, 194, 0.2),
          0px 0px 0px 1px rgba(188, 189, 194, 0.25),
          0px 2px 5px -2px rgba(79, 81, 89, 0.03),
          0px 4px 4px -4px rgba(79, 81, 89, 0.32);
        border-radius: 6px;
        border: none;
        white-space: nowrap;
        font-family: inherit;

        &:hover {
          color: ${basis.text_muted};
          border: none;
          box-shadow: 0px 1px 1px rgba(188, 189, 194, 0.2),
            0px 0px 0px 1px rgba(188, 189, 194, 0.22),
            0px 2px 5px -2px rgba(79, 81, 89, 0.12),
            0px 2px 5px -2px rgba(79, 81, 89, 0.03),
            0px 4px 4px -4px rgba(79, 81, 89, 0.32);
        }

        &:active {
          color: ${basis.text_loud};
          border: none;
          box-shadow: 0px 1px 1px rgba(188, 189, 194, 0.2),
            0px 0px 0px 1px rgba(188, 189, 194, 0.25),
            0px 2px 5px -2px rgba(79, 81, 89, 0.03),
            0px 4px 4px -4px rgba(79, 81, 89, 0.32);
        }
      `}
    >
      {icon && (
        <div
          className={css`
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
          `}
        >
          {icon}
        </div>
      )}
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
  switch (variant) {
    case "primary":
      return primary;
    case "secondary":
      return secondary;
  }
};

export { Button };
