import { css } from "@emotion/css";
import { basis, fill } from "components/constants/colors";
import {
  FC,
  DetailedHTMLProps,
  PropsWithChildren,
  HTMLAttributes,
} from "react";

export const TableCol: FC<
  PropsWithChildren<{ grow?: boolean; above?: boolean }>
> = ({ children, grow, above = false }) => (
  <div
    className={css`
      flex: ${grow ? "fit-content 1 1" : "fit-content 0 0"};
      display: flex;
      flex-direction: column;
      align-items: stretch;
    `}
    style={{
      overflow: above ? "visible" : "hidden",
      transform: above ? "translateZ(1em)" : "translateZ(-1em)",
    }}
  >
    {children}
  </div>
);

export const TableCell: FC<
  PropsWithChildren<
    DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> & {
      variant: "light" | "dark";
      height?: number;
      sep?: boolean;
    }
  >
> = ({ variant, height, children, sep, ...props }) => (
  <div
    {...props}
    className={css`
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      background: ${variant === "dark" ? "transparent" : fill.base.layer_on};
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

export const TabelLabel: FC<
  DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement> & {
    label: string;
  }
> = ({ label, ...props }) => (
  <span
    {...props}
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
