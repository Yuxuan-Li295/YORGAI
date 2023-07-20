import { css } from "@emotion/css";
import { basis } from "components/constants/colors";
import { FC, PropsWithChildren } from "react";

export const TableCol: FC<PropsWithChildren<{ grow?: boolean }>> = ({
  children,
  grow,
}) => (
  <div
    className={css`
      flex: ${grow ? "fit-content 1 1" : "fit-content 0 0"};
      display: flex;
      flex-direction: column;
      align-items: stretch;
      overflow: hidden;
    `}
  >
    {children}
  </div>
);

export const TableCell: FC<
  PropsWithChildren<{
    variant: "light" | "dark";
    height?: number;
    sep?: boolean;
  }>
> = ({ variant, height, children, sep }) => (
  <div
    className={css`
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      background: ${variant === "dark" ? basis.alt.bg_subtle : "transparent"};
      overflow: hidden;
      white-space: nowrap;
      ${height === undefined ? "" : `height: ${height}px;`}
      color: ${basis.text_loud};
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 20px;
      padding: 10px 12px;
      ${sep
        ? `position: relative;
          &::after {
            position: absolute;
            right: 0;
            height: 16px;
            width: 1px;
            content: " ";
            background: ${basis.border_subtle};
          }`
        : ""}
    `}
  >
    {children}
  </div>
);

export const TabelLabel: FC<{ label: string }> = ({ label }) => (
  <span
    className={css`
      color: ${basis.text};
      font-size: 12px;
      font-style: normal;
      font-weight: 500;
      line-height: 16px;
    `}
  >
    {label}
  </span>
);
