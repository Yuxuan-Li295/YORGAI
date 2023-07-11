import { css } from "@emotion/css";
import { FC, ButtonHTMLAttributes, ReactElement } from "react";

export const IconButton: FC<
  ButtonHTMLAttributes<HTMLButtonElement> & { icon: ReactElement }
> = ({ icon, ...props }) => (
  <button
    {...props}
    className={css`
      display: flex;
      padding: 6px;
      justify-content: center;
      align-items: center;
      background: transparent;
      border: none;
    `}
  >
    {icon}
  </button>
);
