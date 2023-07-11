import { css } from "@emotion/css";
import { basis, fill, transparent } from "components/constants/colors";
import React, { PropsWithChildren, ReactElement } from "react";

const Button: React.FC<
  PropsWithChildren<
    {
      variant?: "primary" | "secondary" | "tertiary";
      active?: boolean;
      size?: "xs" | "sm";
      prepend?: ReactElement;
      append?: ReactElement;
    } & React.ButtonHTMLAttributes<HTMLButtonElement>
  >
> = ({
  children,
  variant = "primary",
  active = false,
  size = "xs",
  prepend,
  append,
  ...props
}) => {
  const primary = (
    <button
      {...props}
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
        cursor: pointer;

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
          flex-grow: 0;
          flex-shrink: 0;
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          gap: 10px;
          background: linear-gradient(#67cdbc, #67cdbc) padding-box,
            linear-gradient(to bottom, #ffffff52, #ffffff00 60%) border-box;
          padding: ${typeof children === "string" ? "5px 11px" : "5px"};
          border: 1px solid transparent;
          border-radius: 6px;
          color: white;
          font-weight: 500;
          font-size: ${size === "sm" ? "14px" : "12px"};
          line-height: ${size === "sm" ? "20px" : "16px"};
        `}
      >
        {prepend}
        {children}
        {append}
      </div>
    </button>
  );

  const secondary = (
    <button
      {...props}
      className={css`
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: ${typeof children === "string" ? "6px 12px" : "6px"};
        color: ${basis.text};
        gap: 10px;
        background: ${fill.base.layer_chrome};
        box-shadow: 0px 1px 1px rgba(188, 189, 194, 0.2),
          0px 0px 0px 1px rgba(188, 189, 194, 0.25),
          0px 2px 5px -2px rgba(79, 81, 89, 0.03),
          0px 4px 4px -4px rgba(79, 81, 89, 0.32);
        border-radius: 6px;
        border: none;
        white-space: nowrap;
        font-family: inherit;
        cursor: pointer;
        font-weight: 500;
        font-size: ${size === "sm" ? "14px" : "12px"};
        line-height: ${size === "sm" ? "20px" : "16px"};

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
      {prepend && (
        <div
          className={css`
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            color: ${basis.icon};
          `}
        >
          {prepend}
        </div>
      )}
      {typeof children === "string" ? (
        children
      ) : (
        <div
          className={css`
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            color: ${basis.icon};
          `}
        >
          {children}
        </div>
      )}
      {append && (
        <div
          className={css`
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            color: ${basis.icon};
          `}
        >
          {append}
        </div>
      )}
    </button>
  );

  const tertiary = (
    <button
      {...props}
      className={css`
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: ${typeof children === "string" ? "6px 12px" : "6px"};
        color: ${active ? basis.text_loud : basis.text};
        background: ${active ? basis.alt.bg_vibrant : transparent};
        gap: 10px;
        border-radius: 6px;
        border: none;
        white-space: nowrap;
        font-family: inherit;
        cursor: pointer;
        font-weight: 500;
        font-size: ${size === "sm" ? "14px" : "12px"};
        line-height: ${size === "sm" ? "20px" : "16px"};

        &:hover {
          color: ${active ? basis.text_loud : basis.text_muted};
          background: ${active ? basis.alt.bg_vibrant : basis.alt.bg_muted};
          border: none;
        }

        &:active {
          color: ${basis.text_loud};
          background: ${basis.alt.bg_vibrant};
          border: none;
        }
      `}
    >
      {prepend && (
        <div
          className={css`
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            color: ${basis.icon};
          `}
        >
          {prepend}
        </div>
      )}
      {typeof children === "string" ? (
        children
      ) : (
        <div
          className={css`
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            color: ${basis.icon};
          `}
        >
          {children}
        </div>
      )}
      {append && (
        <div
          className={css`
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            color: ${basis.icon};
          `}
        >
          {append}
        </div>
      )}
    </button>
  );

  switch (variant) {
    case "primary":
      return primary;
    case "secondary":
      return secondary;
    case "tertiary":
      return tertiary;
  }
};

export { Button };
